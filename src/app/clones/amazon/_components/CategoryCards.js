"use client"

export default function CategoryCards() {
    const categories = [
        {
            id: 1,
            title: 'Electronics',
            subtitle: 'Up to 50% off',
            image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80',
            link: '#'
        },
        {
            id: 2,
            title: 'Fashion',
            subtitle: 'Latest trends',
            image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80',
            link: '#'
        },
        {
            id: 3,
            title: 'Home & Kitchen',
            subtitle: 'Essentials for your home',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
            link: '#'
        },
        {
            id: 4,
            title: 'Sports & Fitness',
            subtitle: 'Stay active',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
            link: '#'
        },
        {
            id: 5,
            title: 'Beauty & Health',
            subtitle: 'Personal care',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
            link: '#'
        },
        {
            id: 6,
            title: 'Books',
            subtitle: 'Bestsellers',
            image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
            link: '#'
        },
        {
            id: 7,
            title: 'Automotive',
            subtitle: 'Car essentials',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80',
            link: '#'
        },
        {
            id: 8,
            title: 'Gaming',
            subtitle: 'Latest games',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80',
            link: '#'
        }
    ]

    return (
        <section className="category-cards-section">
            <div className="container">
                <h2 className="section-title">Shop by Category</h2>
                <div className="category-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <a href={category.link} className="category-link">
                                <div className="category-image-container">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="category-image"
                                    />
                                    <div className="category-overlay">
                                        <div className="category-content">
                                            <h3 className="category-title">{category.title}</h3>
                                            <p className="category-subtitle">{category.subtitle}</p>
                                            <span className="category-cta">Shop now</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
