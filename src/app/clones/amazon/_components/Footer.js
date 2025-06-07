"use client"

import { Globe, ChevronUp } from 'lucide-react'

export default function Footer() {
    const footerSections = [
        {
            title: 'Get to Know Us',
            links: [
                'Careers',
                'Blog',
                'About Amazon',
                'Investor Relations',
                'Amazon Devices',
                'Amazon Science'
            ]
        },
        {
            title: 'Make Money with Us',
            links: [
                'Sell products on Amazon',
                'Sell on Amazon Business',
                'Sell apps on Amazon',
                'Become an Affiliate',
                'Advertise Your Products',
                'Self-Publish with Us',
                'Host an Amazon Hub',
                'See More Make Money with Us'
            ]
        },
        {
            title: 'Amazon Payment Products',
            links: [
                'Amazon Business Card',
                'Shop with Points',
                'Reload Your Balance',
                'Amazon Currency Converter'
            ]
        },
        {
            title: 'Let Us Help You',
            links: [
                'Amazon and COVID-19',
                'Your Account',
                'Your Orders',
                'Shipping Rates & Policies',
                'Returns & Replacements',
                'Manage Your Content and Devices',
                'Amazon Assistant',
                'Help'
            ]
        }
    ]

    const countries = [
        'Australia', 'Brazil', 'Canada', 'China', 'France', 'Germany', 'India',
        'Italy', 'Japan', 'Mexico', 'Netherlands', 'Poland', 'Singapore',
        'Spain', 'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States'
    ]

    const bottomLinks = [
        'Conditions of Use', 'Privacy Notice', 'Your Ads Privacy Choices'
    ]

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="amazon-footer">
            {/* Back to Top */}
            <div className="back-to-top" onClick={scrollToTop}>
                <span>Back to top</span>
                <ChevronUp size={16} />
            </div>

            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-sections">
                        {footerSections.map((section, index) => (
                            <div key={index} className="footer-section">
                                <h3 className="footer-section-title">{section.title}</h3>
                                <ul className="footer-links">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="#" className="footer-link">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Language and Country Selection */}
            <div className="footer-secondary">
                <div className="container">
                    <div className="footer-branding">
                        <div className="amazon-logo-footer">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                                alt="Amazon"
                                className="logo-image"
                            />
                        </div>
                        
                        <div className="footer-controls">
                            <button className="language-selector">
                                <Globe size={16} />
                                <span>English</span>
                            </button>
                            
                            <button className="currency-selector">
                                <span>$ USD - U.S. Dollar</span>
                            </button>
                            
                            <button className="country-selector">
                                <img 
                                    src="https://flagcdn.com/w20/us.png" 
                                    alt="United States"
                                    className="flag-icon"
                                />
                                <span>United States</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Country Links */}
            <div className="footer-countries">
                <div className="container">
                    <div className="countries-grid">
                        {countries.map((country, index) => (
                            <a key={index} href="#" className="country-link">
                                Amazon {country}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-content">
                        <div className="amazon-services">
                            <div className="service-group">
                                <h4>Amazon Music</h4>
                                <p>Stream millions of songs</p>
                            </div>
                            <div className="service-group">
                                <h4>Amazon Advertising</h4>
                                <p>Find, attract, and engage customers</p>
                            </div>
                            <div className="service-group">
                                <h4>6pm</h4>
                                <p>Score deals on fashion brands</p>
                            </div>
                            <div className="service-group">
                                <h4>AbeBooks</h4>
                                <p>Books, art & collectibles</p>
                            </div>
                            <div className="service-group">
                                <h4>ACX</h4>
                                <p>Audiobook Publishing Made Easy</p>
                            </div>
                            <div className="service-group">
                                <h4>Sell on Amazon</h4>
                                <p>Start a Selling Account</p>
                            </div>
                            <div className="service-group">
                                <h4>Amazon Business</h4>
                                <p>Everything For Your Business</p>
                            </div>
                            <div className="service-group">
                                <h4>AmazonGlobal</h4>
                                <p>Ship Orders Internationally</p>
                            </div>
                            <div className="service-group">
                                <h4>Home Services</h4>
                                <p>Experienced Pros Happiness Guarantee</p>
                            </div>
                            <div className="service-group">
                                <h4>Amazon Web Services</h4>
                                <p>Scalable Cloud Computing Services</p>
                            </div>
                            <div className="service-group">
                                <h4>Audible</h4>
                                <p>Listen to Books & Original Audio Performances</p>
                            </div>
                            <div className="service-group">
                                <h4>Book Depository</h4>
                                <p>Books With Free Delivery Worldwide</p>
                            </div>
                            <div className="service-group">
                                <h4>Box Office Mojo</h4>
                                <p>Find Movie Box Office Data</p>
                            </div>
                            <div className="service-group">
                                <h4>ComiXology</h4>
                                <p>Thousands of Digital Comics</p>
                            </div>
                            <div className="service-group">
                                <h4>DPReview</h4>
                                <p>Digital Photography</p>
                            </div>
                            <div className="service-group">
                                <h4>East Dane</h4>
                                <p>Designer Men's Fashion</p>
                            </div>
                            <div className="service-group">
                                <h4>Fabric</h4>
                                <p>Sewing, Quilting & Knitting</p>
                            </div>
                            <div className="service-group">
                                <h4>Goodreads</h4>
                                <p>Book reviews & recommendations</p>
                            </div>
                            <div className="service-group">
                                <h4>IMDb</h4>
                                <p>Movies, TV & Celebrities</p>
                            </div>
                            <div className="service-group">
                                <h4>IMDbPro</h4>
                                <p>Get Info Entertainment Professionals Need</p>
                            </div>
                            <div className="service-group">
                                <h4>Kindle Direct Publishing</h4>
                                <p>Indie Digital & Print Publishing Made Easy</p>
                            </div>
                            <div className="service-group">
                                <h4>Prime Video Direct</h4>
                                <p>Video Distribution Made Easy</p>
                            </div>
                            <div className="service-group">
                                <h4>Shopbop</h4>
                                <p>Designer Fashion Brands</p>
                            </div>
                            <div className="service-group">
                                <h4>Woot!</h4>
                                <p>Deals and Shenanigans</p>
                            </div>
                            <div className="service-group">
                                <h4>Zappos</h4>
                                <p>Shoes & Clothing</p>
                            </div>
                            <div className="service-group">
                                <h4>Ring</h4>
                                <p>Smart Home Security Systems</p>
                            </div>
                            <div className="service-group">
                                <h4>eero WiFi</h4>
                                <p>Stream 4K Video in Every Room</p>
                            </div>
                            <div className="service-group">
                                <h4>Blink</h4>
                                <p>Smart Security for Every Home</p>
                            </div>
                            <div className="service-group">
                                <h4>Neighbors App</h4>
                                <p>Real-Time Crime & Safety Alerts</p>
                            </div>
                            <div className="service-group">
                                <h4>Amazon Subscription Boxes</h4>
                                <p>Top subscription boxes – right to your door</p>
                            </div>
                            <div className="service-group">
                                <h4>PillPack</h4>
                                <p>Pharmacy Simplified</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="legal-links">
                        {bottomLinks.map((link, index) => (
                            <a key={index} href="#" className="legal-link">
                                {link}
                            </a>
                        ))}
                        <span className="copyright">
                            © 1996-2024, Amazon.com, Inc. or its affiliates
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
