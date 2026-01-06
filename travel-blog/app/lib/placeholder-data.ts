import { Activity, Itinerary, Location, User } from './definitions';

export const sampleUsers: User[] = [
    {
        id: '1',
        username: 'travelwanderer',
        email: 'alex@example.com',
        display_name: 'Alex Walker',
        bio: 'Adventure seeker and travel enthusiast exploring the world one destination at a time.',
    },
    {
        id: '2',
        username: 'globetrotter',
        email: 'jordan@example.com',
        display_name: 'Jordan Smith',
        bio: 'Documenting my journeys across continents.',
    },
];

export const sampleLocations: Location[] = [
    {
        id: 'loc-1',
        name: 'Tokyo, Japan',
        link: 'https://en.wikipedia.org/wiki/Tokyo',
        latitude: 35.6762,
        longitude: 139.6503,
    },
    {
        id: 'loc-2',
        name: 'Eiffel Tower, Paris',
        link: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
        latitude: 48.8584,
        longitude: 2.2945,
    },
    {
        id: 'loc-3',
        name: 'Machu Picchu, Peru',
        link: 'https://en.wikipedia.org/wiki/Machu_Picchu',
        latitude: -13.1631,
        longitude: -72.5449,
    },
];

export const sampleActivities: Activity[] = [
    {
        id: 'act-1',
        user_id: '1',
        type: 'sightseeing',
        title: 'Visit Senso-ji Temple',
        description: 'Explored the historic Buddhist temple and enjoyed street food at the marketplace.',
        date: '2024-03-15',
        location_id: 'loc-1',
    },
    {
        id: 'act-2',
        user_id: '1',
        type: 'food',
        title: 'Ramen Dinner in Shibuya',
        description: 'Enjoyed authentic ramen at a local favorite restaurant.',
        date: '2024-03-16',
        location_id: 'loc-1',
    },
    {
        id: 'act-3',
        user_id: '1',
        type: 'cultural',
        title: 'Eiffel Tower Museum Visit',
        description: 'Climbed to the top and learned about the monument\'s history.',
        date: '2024-04-05',
        location_id: 'loc-2',
    },
    {
        id: 'act-4',
        user_id: '1',
        type: 'hiking',
        title: 'Inca Trail Trek',
        description: 'Multi-day hiking adventure through the mountain passes to reach Machu Picchu.',
        date: '2024-05-20',
        location_id: 'loc-3',
    },
];

export const sampleItineraries: Itinerary[] = [
    {
        id: 'itin-1',
        user_id: '1',
        title: 'Tokyo Adventure Week',
        description: 'A week exploring temples, food, and modern Tokyo culture.',
        activities: [sampleActivities[0], sampleActivities[1]],
        start_date: '2024-03-14',
        end_date: '2024-03-21',
        main_location_id: 'loc-1',
    },
    {
        id: 'itin-2',
        user_id: '1',
        title: 'European Classic Tour',
        description: 'Two weeks experiencing the best of Western Europe.',
        activities: [sampleActivities[2]],
        start_date: '2024-04-01',
        end_date: '2024-04-14',
        main_location_id: 'loc-2',
    },
    {
        id: 'itin-3',
        user_id: '1',
        title: 'Peru Mountain Experience',
        description: 'Trekking through the Andes to discover ancient ruins.',
        activities: [sampleActivities[3]],
        start_date: '2024-05-18',
        end_date: '2024-05-25',
        main_location_id: 'loc-3',
    },
];