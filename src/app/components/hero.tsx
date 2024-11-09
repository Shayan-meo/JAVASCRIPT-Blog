import Image from "next/image";
import img from "../../../js.png";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-white text-gray-900 body-font">
            <div className="container mx-auto flex flex-col items-center px-5 py-10 md:py-20">
                <div className="relative mb-10 w-full max-w-3xl"> {/* Set a max width for the image */}
                    <Image
                        className="rounded-[50px] border-4 border-blue-500 object-cover object-center"
                        alt="hero"
                        src={img}
                        layout="responsive"
                        width={700} // Adjust width as necessary
                        height={400} // Adjust height as necessary
                    />
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">JavaScript: The Complete Guide for Beginners</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            JavaScript, often abbreviated as JS, is one of the most popular and powerful programming languages in the world. It&apos;s known for its role in web development but has expanded into various other fields. This blog will cover everything from the language&apos;s history to its present-day applications and future outlook.
                        </p>

                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Key Features of JavaScript</h1>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li> <span className=" underline font-semibold">Lightweight and Interpreted:</span> Executes code directly in the browser.</li>
                            <li> <span className=" underline font-semibold">Event-Driven:</span> Can respond to user actions like clicks and keystrokes.</li>
                            <li> <span className=" underline font-semibold">Cross-Platform:</span> Works across all major browsers and devices.</li>
                            <li> <span className=" underline font-semibold">Object-Oriented:</span> Supports object-oriented programming, making it versatile.</li>
                        </ul>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Applications of JavaScript</h1>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li> <span className=" underline font-semibold">Web Development:</span> Used for creating interactive web pages, handling DOM manipulation, animations, and more</li>
                            <li> <span className=" underline font-semibold">Backend Development: </span> With Node.js, JavaScript is used for server-side applications.
                            </li>
                            <li> <span className=" underline font-semibold">Mobile App Development:</span> Frameworks like React Native allow JavaScript to be used for iOS and Android apps.</li>
                            <li> <span className=" underline font-semibold">Game Development:</span> Libraries and frameworks like Phaser.js enable game development with JavaScript.</li>
                            <li> <span className=" underline font-semibold">Machine Learning:</span>Libraries like TensorFlow.js allow developers to implement machine learning directly in the browser.</li>
                        </ul>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">The History of JavaScript</h1>
                        <p className="text-lg md:text-2xl mb-6">
                        <span className=" underline font-semibold">Founding of JavaScript:</span>
                             JavaScript was created by Brendan Eich in 1995 while working at Netscape Communications. He developed the language in just 10 days to provide a way for developers to make web pages interactive.
                        </p>
                        <p className="text-lg md:text-2xl mb-6">
                        <span className=" underline font-semibold"> Purpose of JavaScript:</span>
                            JavaScript was initially designed to create dynamic and interactive elements for websites, which was a big limitation with just HTML and CSS. Netscape introduced it as a scripting language to compete with Java, but with a focus on the web.
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Why Was JavaScript Created?</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            JavaScript was created to make the web more engaging and interactive for users. In the mid-90s, web pages were mostly static and lacked user interaction. JavaScript allowed developers to add animations, validate forms, and dynamically update content on a page without requiring a reload.
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">How JavaScript is Used in Web Development</h1>
                        <h3 className="text-lg md:text-2xl mb-6">
                            In web development, JavaScript enhances the user experience by enabling dynamic content and interactivity. Some examples include:
                        </h3>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li><span className=" underline font-semibold">  Web Development:</span> Used for creating interactive web pages, handling DOM manipulation, animations, and more</li>
                            <li><span className=" underline font-semibold">Updating Content:</span> Changing website content without reloading the page.</li>
                            <li><span className=" underline font-semibold">Form Validation:</span> Checking if input meets certain conditions before submitting.</li>
                            <li><span className=" underline font-semibold">Animations:</span>  Adding effects to make the website more engaging.</li>
                            <li><span className=" underline font-semibold">Single-Page Applications (SPAs):</span> Frameworks like React and Angular use JavaScript to create fast, interactive SPAs.</li>
                        </ul>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">JavaScript&apos;s Market Scope and Popularity</h1>
                        <h3 className="text-lg md:text-2xl mb-6">
                            JavaScript has a significant share in the global developer community:
                        </h3>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li> <span className=" underline font-semibold">Usage Statistics:</span> JavaScript is used by approximately 65-70% of developers worldwide, according to surveys by Stack Overflow and GitHub.</li>
                            <li><span className=" underline font-semibold">High Demand:</span>  JavaScript is among the most in-demand skills for web developers, mobile app developers, and even data scientists.</li>
                            <li> <span className=" underline font-semibold">Community and Libraries:</span>Community and Libraries: With thousands of libraries and a massive developer community, JavaScript remains one of the most accessible and supported languages.</li>
                        </ul>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">JavaScript Frameworks and Libraries</h1>
                        <h3 className="text-lg md:text-2xl mb-6">
                            JavaScript has a rich ecosystem with popular libraries and frameworks:
                        </h3>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li><span className=" underline font-semibold">React:</span> Developed by Facebook, React is popular for building user interfaces.</li>
                            <li><span className=" underline font-semibold">Vue.js:</span>  Known for its simplicity and flexibility, Vue is highly favored by new developers.</li>
                            <li><span className=" underline font-semibold">Angular:</span> A complete front-end framework developed by Google, ideal for building large-scale applications. </li>
                            <li><span className=" underline font-semibold">Node.js:</span> Extends JavaScript to the server side, enabling full-stack development.
                            </li>
                        </ul>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">The Future of JavaScript</h1>
                        <h3 className="text-lg md:text-2xl mb-6">
                            JavaScript&apos;s future looks promising:</h3>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li><span className=" underline font-semibold">Web3 and Blockchain:</span> JavaScript is gaining traction in the blockchain world with libraries like Web3.js.
                            </li>
                            <li><span className=" underline font-semibold">AI and Machine Learning:</span>  TensorFlow.js is pioneering JavaScript in the machine learning field.
                            </li>
                            <li><span className=" underline font-semibold">Serverless Computing:</span> JavaScript with serverless platforms (like AWS Lambda) is simplifying backend development. </li>
                        </ul>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Why Learn JavaScript?</h1>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li><span className=" underline font-semibold">High Demand:</span>  It&apos;s one of the top 5 languages for web development jobs globally.</li>
                            <li><span className=" underline font-semibold">Versatility:</span> Knowledge of JavaScript allows you to build web apps, mobile apps, and server-side applications.
                            </li>
                            <li><span className=" underline font-semibold">Rich Ecosystem:</span> With so many frameworks and libraries, learning JavaScript opens up vast opportunities.
                            </li>
                            <li><span className=" underline font-semibold">Community Support:</span> JavaScript has a huge community, making it easy to find help and resources online.</li>
                        </ul>


                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Conclusion:</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            JavaScript has transformed from a simple scripting language to a versatile powerhouse that can be used across various platforms and industries. With a growing ecosystem and continuous innovations, JavaScript will continue to shape the future of technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}