import { ArrowRight } from "lucide-react";
function Footer(){
    return(
        <div>
            <div className="py-5 lg:max-w-6xl mx-auto max-lg:px-5">
                <a href="">
                    <button className="flex items-center justify-between duration-500 py-5 lg:py-10 px-8 bg-[#6A0DAD] rounded-full w-full font-bold text-black hover:bg-[#5b0797] transition-all">
                        <span className="lg:text-[97px] text-white text-2xl md:text-4xl lg:px-20">
                            Register Now
                        </span>
                        <span className="ml-6 flex items-center justify-center lg:w-30 lg:h-30 h-10 w-10 rounded-full bg-white">
                            <ArrowRight className="lg:w-20 lg:h-20 text-[#6A0DAD]" />
                        </span>
                    </button>
                </a>
            </div>
            <footer className="bg-[#152028] relative overflow-hidden">               
                <div className="relative">
                    {/* Main footer content */}
                    <div className="lg:flex max-lg:space-y-8 lg:max-w-6xl mx-auto lg:py-16 pt-16 pb-8 justify-between px-6 max-sm:px-5">
                        {/* Brand section */}
                        <div className="lg:max-w-sm space-y-6">
                            <div>
                                <a href="#home" className="text-4xl text-[#E00912] font-bold satisfy-regular hover:text-white transition-colors duration-300">
                                    Rapid Route
                                </a>
                            </div>
                            <div>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Powering businesses and individuals with <span className="text-[#E00912] font-semibold">fast, reliable, and efficient</span> transport and logistics solutions.
                                    From bulk freight to last-mile delivery, Rapid Route ensures your goods arrive safely and on time—every time.
                                </p>
                            </div>
                            {/* Social media */}
                            <div className="flex items-center gap-4">
                                <span className="text-white font-medium">Follow Us:</span>
                                <div className="flex gap-3">
                                    <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#E00912] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <ion-icon name="logo-facebook" class="text-lg"></ion-icon>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#E00912] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <ion-icon name="logo-instagram" class="text-lg"></ion-icon>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#E00912] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <ion-icon name="logo-twitter" class="text-lg"></ion-icon>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#E00912] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <ion-icon name="logo-linkedin" class="text-lg"></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Navigation sections */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Company */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-white">Company</h3>
                                <div className="space-y-3">
                                    <a href="#about" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">About Us</a>
                                    <a href="#" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Our Fleet</a>
                                    <a href="#" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Careers</a>
                                    <a href="#" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">News & Insights</a>
                                </div>
                            </div>
                            
                            {/* Services */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-white">Services</h3>
                                <div className="space-y-3">
                                    <a href="#service" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Freight Transport</a>
                                    <a href="#service" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Warehousing</a>
                                    <a href="#service" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Last-Mile Delivery</a>
                                    <a href="#service" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Custom Logistics</a>
                                </div>
                            </div>
                            
                            {/* Support */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-white">Support</h3>
                                <div className="space-y-3">
                                    <a href="#" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Track Shipment</a>
                                    <a href="#contact" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Contact Us</a>
                                    <a href="#" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Safety & Compliance</a>
                                    <a href="#" className="block text-gray-300 hover:text-[#E00912] transition-colors duration-300">Terms & Privacy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact info */}
                    <div className="border-t border-gray-700">
                        <div className="max-w-6xl mx-auto px-6 py-8">
                            <div className="flex justify-center items-center gap-6">
                                <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#E00912]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">42B oworo Road, Oworoshoki, Lagos, Nigeria</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#E00912]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                        </svg>
                                        <span className="text-sm">24/7 Support: +234-906-072-0810</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#E00912]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                        </svg>
                                        <span className="text-sm">support@rapidroute.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Copyright */}
                    <div className="border-t border-gray-700 py-6 text-center">
                        <div className="max-w-6xl mx-auto px-6">
                            <p className="text-gray-400">
                                © 2025 Rapid Route. All rights reserved. | 
                                <span className="text-[#E00912]"> Driving logistics forward, one delivery at a time.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;
