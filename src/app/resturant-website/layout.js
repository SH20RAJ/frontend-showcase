export const metadata = {
    title: 'Savoria Restaurant - Culinary Excellence',
    description: 'Experience fine dining at its best. Where passion meets flavor in every carefully crafted dish.',
    keywords: 'restaurant, fine dining, culinary, food, gourmet, chef, reservation',
    openGraph: {
        title: 'Savoria Restaurant - Culinary Excellence',
        description: 'Experience fine dining at its best. Where passion meets flavor in every carefully crafted dish.',
        type: 'website',
        url: 'https://savoria-restaurant.com',
        images: [
            {
                url: '/api/placeholder/1200/630',
                width: 1200,
                height: 630,
                alt: 'Savoria Restaurant',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Savoria Restaurant - Culinary Excellence',
        description: 'Experience fine dining at its best. Where passion meets flavor in every carefully crafted dish.',
        images: ['/api/placeholder/1200/630'],
    },
}

export default function RestaurantLayout({ children }) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    )
}
