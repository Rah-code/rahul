import React from 'react'
import { useParams } from 'react-router-dom'
import './PortfolioDetails.css'
import { FiCornerUpRight } from 'react-icons/fi'
import { FaRegHandPointRight } from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const PortfolioDetails = () => {
    const { id } = useParams()
    const projectDetails = [

        {
            id: 1,
            title: "Online Shopping System",
            introduction: "Extensive Menu Selection: Choose from a diverse range of pizza flavors, toppings, and sizes to satisfy your cravings.Customization Options: Personalize your pizza by selecting your favorite toppings, crust types, and additional extras.Effortless Ordering Process: Navigate through our intuitive app interface to place your order quickly and effortlessly.User-Friendly Experience: Designed with simplicity in mind, our app caters to users of all ages and technical backgrounds, making pizza ordering a breeze.",
            features: [
                {
                    "heading": "Intuitive Dashboard",
                    "details": [
                        "Upon first-time, users are greeted with an intuitive dashboard showcasing a comprehensive list of available pizzas.",
                        "The dashboard provides an overview of all pizza options, including popular flavors, specialty pizzas, and customizable choices.",
                        "Users can easily browse through the list, view detailed descriptions, and select their desired pizzas for ordering."
                    ]
                },
                {
                    "heading": "User Registration",
                    "details": ["To register, users provide necessary details such as name, email, and password. Upon successful registration, users gain access to the app's features."]
                },
                {
                    "heading": "User Login",
                    "details": ["Registered users log in using their credentials (email and password) to access their accounts. Upon successful login, users can begin using the app's functionalities."]
                },
                {
                    "heading": "Pizza Selection and Customization",
                    "details": [
                        "Users can add pizzas to their cart, choosing from various size variants including small, medium, and large.",
                        "For each pizza, users can specify the quantity they wish to order, allowing them to order multiple pizzas of the same or different variants.",
                        "The app provides options for customizing pizzas with additional toppings, sauces, or crust types to suit individual preferences."
                    ]
                },
                {
                    "heading": "Adding to Cart",
                    "details": ["Users can add selected pizzas to their cart, where they can adjust the quantity and remove items as needed."]
                },
                {
                    "heading": "Checkout Process",
                    "details": ["Upon proceeding to checkout, users are presented with payment options, including Razorpay integration for secure transactions."]
                },
                {
                    "heading": "Order Confirmation",
                    "details": ["After successful payment, users receive confirmation of their order. They can then navigate to the order section to view details of their recent transactions."]
                },
                {
                    "heading": "User Profile Dropdown",
                    "details": [
                        "Users can access a dropdown menu under their name, providing quick access to account-related options.",
                        "The dropdown menu includes options to view past orders, allowing users to track their order history and status.",
                        "Additionally, users can easily log out from the app directly from the dropdown menu, ensuring convenient account management."
                    ]
                },
                {
                    "heading": "Admin Dashboard",
                    "details": [
                        "Admins have access to a dedicated dashboard where they can manage various aspects of the pizza ordering system.",
                        "Admins can add new pizza options to the menu, including specifying details such as name, toppings, and price.",
                        "The dashboard allows admins to edit existing pizza listings to update information or make modifications.",
                        "Admins have the ability to remove pizza options from the menu as needed, ensuring the menu remains up-to-date and relevant.",
                        "In addition to pizza management, admins can also view lists of all registered users and all orders placed through the system."
                    ]
                }
            ],
            tools: [{ ui: "Front-End", tools: ["React Js", "Redux", "Bootstrap"] }, { ui: "Back-End", tools: ["NODE JS", "EXPRESS JS", "SQL", "SEQUELIZE", "SOCKET"] }, { ui: "THird-party Integrations", tools: ["SENDINBLUE"] }],
            workflow: [
                {
                    "title": "Intuitive Dashboard",
                    "details": [
                        "Upon first-time, users are greeted with an intuitive dashboard showcasing a comprehensive list of available pizzas.",
                        "The dashboard provides an overview of all pizza options, including popular flavors, specialty pizzas, and customizable choices.",
                        "Users can easily browse through the list, view detailed descriptions, and select their desired pizzas for ordering."
                    ]
                }, {
                    "title": "User Registration",
                    "details": ["To register, users provide necessary details such as name, email, and password. Upon successful registration, users gain access to the app's features."]
                },
                {
                    "title": "User Login",
                    "details": ["Registered users log in using their credentials (email and password) to access their accounts. Upon successful login, users can begin using the app's functionalities."]
                },
                {
                    "title": "Pizza Selection and Customization",
                    "details": [
                        "Users can add pizzas to their cart, choosing from various size variants including small, medium, and large.",
                        "For each pizza, users can specify the quantity they wish to order, allowing them to order multiple pizzas of the same or different variants.",
                        "The app provides options for customizing pizzas with additional toppings, sauces, or crust types to suit individual preferences."
                    ]
                },
                {
                    "title": "Adding to Cart",
                    "details": ["Users can add selected pizzas to their cart, where they can adjust the quantity and remove items as needed."]
                },
                {
                    "title": "Checkout Process",
                    "details": ["Upon proceeding to checkout, users are presented with payment options, including Razorpay integration for secure transactions."]
                },
                {
                    "title": "Order Confirmation",
                    "details": ["After successful payment, users receive confirmation of their order. They can then navigate to the order section to view details of their recent transactions."]
                },
                {
                    "title": "User Profile Dropdown",
                    "details": [
                        "Users can access a dropdown menu under their name, providing quick access to account-related options.",
                        "The dropdown menu includes options to view past orders, allowing users to track their order history and status.",
                        "Additionally, users can easily log out from the app directly from the dropdown menu, ensuring convenient account management."
                    ]
                },
                {
                    "title": "Admin Dashboard",
                    "details": [
                        "Admins have access to a dedicated dashboard where they can manage various aspects of the pizza ordering system.",
                        "Admins can add new pizza options to the menu, including specifying details such as name, toppings, and price.",
                        "The dashboard allows admins to edit existing pizza listings to update information or make modifications.",
                        "Admins have the ability to remove pizza options from the menu as needed, ensuring the menu remains up-to-date and relevant.",
                        "In addition to pizza management, admins can also view lists of all registered users and all orders placed through the system."
                    ]
                }
            ],
            "benefits": [
                "Convenience: Users can easily browse and order pizzas from the comfort of their homes, eliminating the need to visit a physical store.",
                "Customization: The app allows users to customize their pizza orders, selecting from a variety of toppings, sizes, and crust options to suit their preferences.",
                "Efficiency: The ordering process is streamlined, with features such as quick add-to-cart options and secure checkout, saving users time and effort.",
                "Order Tracking: Users can track the status of their orders in real-time, from placement to delivery, ensuring transparency and peace of mind.",
                "Menu Management: Admins can efficiently manage the pizza menu, adding, editing, and removing options as needed to keep the menu fresh and appealing.",
                "Insights: The system provides valuable insights for admins, including user demographics, popular pizza choices, and order trends, enabling data-driven decision-making."
            ],
            "future_enhancements": [
                "Mobile App Integration: Developing a mobile app version of the pizza ordering system to provide users with greater flexibility and accessibility.",
                "Reward Programs: Implementing loyalty programs or reward systems to incentivize repeat orders and customer retention.",
                "Advanced Analytics: Enhancing analytics capabilities to provide more in-depth insights into user behavior, order patterns, and market trends.",
                "Social Media Integration: Integrating social media platforms for seamless sharing of pizza orders, promotions, and user-generated content.",
                "Recommendation Engine: Implementing a recommendation engine to suggest personalized pizza options based on user preferences and past orders.",
                "Chatbot Support: Introducing chatbot support for customer inquiries, order tracking, and assistance with menu navigation and customization."
            ],
            "conclusion": "In conclusion, the pizza ordering app offers a convenient and efficient way for users to satisfy their pizza cravings. With features for both users and admins, the app provides a seamless ordering experience while also offering valuable insights and management tools for pizza businesses. With future enhancements focused on user personalization, analytics, and expansion, the app is poised to further improve and innovate in the pizza delivery market."
        },

        {
            id: 2,
            title: "Task Scheduling",
            introduction: "Efficient task scheduling plays a crucial role in optimizing cloud resource usage and ensuring better Quality of Service (QoS). In this project, we conducted a detailed comparison of multiple task scheduling algorithms to evaluate their performance in terms of CPU usage, bandwidth consumption, and overall system efficiency. The motivation was to identify the most suitable scheduling method that can maximize resource utilization while minimizing latency and cost in a cloud computing environment.",

            features: [
                {
                    heading: 'Algorithm Comparison:', details: ["Studied and implemented various scheduling algorithms such as First-Come-First-Serve (FCFS), Round Robin, and Min-Min."]
                },
                {
                    heading: 'Performance Metrics:', details: ['Measured CPU utilization, memory efficiency, bandwidth usage, and job completion time.']
                }, {
                    heading: 'Visualization:', details: ['Used pie charts and bar graphs for better understanding and comparison of results.']
                }, {
                    heading: 'Result Interpretation:', details: ['Provided insights on algorithm efficiency and adaptability under varying workloads.']
                }


            ],
            tools: [{ ui: "Programming Language", tools: ["python"] }, { ui: "Simulation Tools", tools: [" CloudSim , MATLAB , Custom Simulator"] }, { ui: "Visualization Tools", tools: [" Python’s matplotlib, seaborn, or Excel for charting"] }],
            workflow: [
                {
                    title: "Define Cloud Environment",
                    details: [
                        "Setup a simulated cloud environment with predefined resources (CPU, bandwidth, memory)."
                    ]
                },
                {
                    title: "Task Generation:",
                    details: [
                        "Create multiple tasks/jobs with varying requirements."
                    ]
                },
                {
                    title: "Apply Scheduling Algorithms:",
                    details: [
                        "Assign tasks using each algorithm (e.g., FCFS, Round Robin, Min-Min)."
                    ]
                }, {
                    title: "Performance Monitoring: ",
                    details: [
                        "Capture CPU usage, memory load, and bandwidth utilization for each scheduling method."
                    ]
                },
                {
                    title: "Visualization:",
                    details: [
                        "Use pie charts and bar plots to represent resource distribution and performance."
                    ]
                },
                {
                    title: "Analysis:",
                    details: [
                        "Identify strengths and weaknesses of each algorithm in different scenarios."
                    ]
                },

            ],
            benefits: [
                "Enables organizations to select scheduling algorithms that maximize CPU and bandwidth efficiency.",
                "Data-driven visualizations (pie charts, performance metrics) aid in making informed infrastructure decisions.",
                "Identifying the most efficient scheduling method can reduce operational costs in cloud environments by minimizing idle resources.",
                "Helps in preparing infrastructure to handle increasing workloads by analyzing how each algorithm scales."
            ],
            future_enhancements: [
                "Integrate AI/ML-based scheduling algorithms to dynamically adapt to workloads.",
                "Extend the simulation to a real-time cloud environment using platforms like AWS or Azure.",
                "Incorporate energy-aware scheduling to reduce power consumption.",
                "Add fault tolerance and redundancy simulation to study impact on reliability."
            ],
            conclusion: "Through this project, we successfully identified the scheduling algorithm that offers optimal performance in a cloud environment by comparing CPU and bandwidth usage. Visualization helped clearly demonstrate which algorithms were better suited for specific scenarios. This research aids in selecting appropriate scheduling strategies for cloud providers to improve resource allocation and enhance system performance. The study provides a foundational step toward more intelligent, adaptive, and efficient cloud computing infrastructures."
        },

    ]
    let projectDetailsFilter = projectDetails.filter(item => Number(item.id) === Number(id))[0]
    console.log("proje", projectDetailsFilter)
    return (
        <>
            <div className="container portfolio__container1">


                <div className='prj-details'>
                    <Link to="/" className="btn btn-primary">Home</Link>
                    <h2 className='details-portfolio'>{projectDetailsFilter.title}</h2>
                    <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
                </div>
                {
                    projectDetailsFilter.demo && projectDetailsFilter.schema && projectDetailsFilter.image && <>
                        <div className='portfolio__container2'>
                            <div style={{ marginRight: "20px" }}>

                                {projectDetailsFilter.demo}
                            </div>
                            <div style={{ marginRight: "20px" }}>
                                {projectDetailsFilter.schema}
                            </div>
                            <div>
                                {projectDetailsFilter.image}
                            </div>
                        </div>
                    </>
                }

                {
                    projectDetailsFilter.introduction && <>

                        <div className='intoduction '>
                            <h1>Introduction:</h1>
                            <h4>{projectDetailsFilter.introduction}</h4>
                        </div>
                        <div className='features'>
                            <h1>Features:</h1>
                            <div>

                                {
                                    projectDetailsFilter.features.map((item, i) => {
                                        return (
                                            <div key={i}>

                                                <h2 style={{ color: "pink" }}>{item.heading}</h2>

                                                <ul >
                                                    {
                                                        item.details.map((items, i) => {
                                                            return (
                                                                <>
                                                                    <div className='heading-icon'>

                                                                        <FiCornerUpRight /><li>{items}</li>
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='technology-tools'>
                            <h1>Technology:</h1>
                            {
                                projectDetailsFilter.tools.map((item, i) => {
                                    return (
                                        <div className='tools-tech'>

                                            <h2 style={{ color: "gold" }}>{item.ui}</h2>

                                            <div >

                                                {
                                                    item.tools.map((items, i) => {
                                                        return (
                                                            <>
                                                                <li style={{ color: 'greenyellow' }}>{items}</li>
                                                            </>
                                                        )
                                                    })
                                                }

                                                <p style={{ color: "goldenrod" }}>---------------------------------------</p>
                                            </div>


                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='workflow'>
                            <h1>WorkFlow:</h1>
                            {
                                projectDetailsFilter.workflow.map((item, i) => {
                                    return (
                                        <>
                                            <h3 style={{ color: "yellow" }}>{item.title}</h3>
                                            <ul>

                                                {
                                                    item.details.map((items, i) => {
                                                        return (
                                                            <>
                                                                <div className='heading-icon'>

                                                                    <FaRegHandPointRight /> <li>{items}</li>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </>
                                    )
                                })
                            }

                        </div>
                        <div className='benefits'>
                            <h1>Benefits:</h1>
                            <ul>

                                {
                                    projectDetailsFilter.benefits.map((item, i) => {
                                        return (
                                            <>
                                                <div className='heading-icon'>

                                                    <FaRegHandPointRight /><li>{item}</li>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='future_enhancements'>
                            <h1>Future Enhancements:</h1>
                            <ul>

                                {
                                    projectDetailsFilter.future_enhancements.map((item, i) => {
                                        return (
                                            <>
                                                <div className='heading-icon'>

                                                    <FaRegHandPointRight /><li>{item}</li>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='conclusion'>
                            <h1>Conclusion:</h1>
                            <div className='heading-icon'>

                                <FaRegHandPointRight /><li>{projectDetailsFilter.conclusion}</li>
                            </div>
                        </div>
                    </>
                }
                {
                    !projectDetailsFilter.introduction && <>
                        <h1 style={{ color: "gold" }}>Not updated</h1>
                    </>
                }


            </div>
        </>
    )
}

export default PortfolioDetails