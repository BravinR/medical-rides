import { NextResponse } from 'next/server';

const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest';
// Bias results toward the service area (Colorado Springs); see autofill-address route.
const SERVICE_AREA_PROXIMITY = '-104.8214,38.8339';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('q') || '';

    const params = new URLSearchParams({
        q: searchText,
        language: 'en',
        limit: '1',
        country: 'us',
        proximity: SERVICE_AREA_PROXIMITY,
        session_token: '0e4d5549-e85f-4591-88f5-11822aa0aaba',
        access_token: process.env.MAPBOX_ACCESS_TOKEN || '',
    });

    const res = await fetch(`${BASE_URL}?${params}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const searchResult = await res.json();
    return NextResponse.json({ searchResult });
}
