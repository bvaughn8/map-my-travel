export type Activity = {
    id: string;
    user_id: string;
    type: 'hiking' | 'sightseeing' | 'food' | 'cultural' | 'adventure';
    title: string;
    description: string;
    date: string; // ISO date string
    location_id: string;
}

export type Itinerary = {
    id: string;
    user_id: string;
    title: string;
    description: string;
    activities: Activity[];
    start_date: string; // ISO date string
    end_date: string; // ISO date string
    main_location_id: string;
}

export type Location = {
    id: string;
    name: string;
    link?: string;
    latitude: number;
    longitude: number;
}

export type User = {
    id: string;
    username: string;
    email: string;
    display_name: string;
    bio?: string;
}