// app/api/twitter/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';

// Twitter API Bearer Token
const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

// Function to get tweet details from Twitter API
const getTweetDetails = async (tweetUrl: string) => {
  const tweetId = tweetUrl.split('/').pop();  // Extract tweet ID from URL
  
  try {
    const response = await axios.get(`https://api.twitter.com/2/tweets/${tweetId}`, {
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tweet details:', error);
    return null;
  }
};

// API Route Handler
export async function POST(request: Request) {
  const { tweetUrl, selectedOptions } = await request.json();

  if (!tweetUrl || !selectedOptions) {
    return NextResponse.json({ error: 'Tweet URL and selected options are required' }, { status: 400 });
  }

  const tweetDetails = await getTweetDetails(tweetUrl);

  if (!tweetDetails) {
    return NextResponse.json({ error: 'Failed to fetch tweet details' }, { status: 404 });
  }

  const tweetData = tweetDetails.data;
  const metrics = tweetData.public_metrics;

  // Simulate random selection based on the selected options
  const result = {
    tweetUrl,
    likeCount: metrics.like_count,
    retweetCount: metrics.retweet_count,
    quoteCount: metrics.quote_count,
  };

  let selectedResult = '';

  // Handle random selection based on user options
  if (selectedOptions.includes('1')) {
    selectedResult = `Like Count: ${result.likeCount}`;
  } else if (selectedOptions.includes('2')) {
    selectedResult = `Retweet Count: ${result.retweetCount}`;
  } else if (selectedOptions.includes('3')) {
    selectedResult = `Quote Retweet Count: ${result.quoteCount}`;
  }

  return NextResponse.json({ message: selectedResult, data: result });
}
