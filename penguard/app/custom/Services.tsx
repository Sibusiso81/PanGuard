import React from "react";

function Service() {
 const data = [
  {
    id: "01",
    title: "Community Network Setup",
    description: "Users begin by creating custom, trusted groups (neighbours, family, community)[cite: 12]. This establishes a community-driven response network [cite: 11] where members are immediately alerted to an incident, fostering neighbour-led intervention[cite: 67]."
  },
  {
    id: "02",
    title: "Proactive Risk Assessment (Safety Chatbot)",
    description: "The system provides insights derived from real incident data [cite: 85, 86] to identify hotspots[cite: 87]. This functionality enables users to proactively assess the risk or safety of a location they wish to visit, supporting awareness and prevention campaigns[cite: 88, 89]."
  },
  {
    id: "03",
    title: "Real-Time Rapid Response (Panic Button)",
    description: "When the panic button is pressed, all group members are immediately alerted[cite: 14]. The victim's location is shared with navigation [cite: 15], and members can coordinate backup by pressing 'I'm going'[cite: 16, 17, 18]. This enables faster intervention than waiting for official emergency services[cite: 21]."
  },
  {
    id: "04",
    title: "Data Insights & Analytics Dashboard",
    description: "The platform provides real incident data[cite: 85, 86]. This information can be used to identify hotspots and guide data-driven policy [cite: 61], supporting research and informing the allocation of resources for prevention campaigns[cite: 88, 89]."
  },
  {
    id: "05",
    title: "System Control & Continuous Improvement",
    description: "The system is maintained through continuous monitoring, updates, and technical support to ensure reliability and safety[cite: 74, 76, 79]. Ongoing community feedback guides improvements, and a super admin dashboard manages user integrity to prevent misuse[cite: 77, 78]."
  }
]

  return <section className="w-screen h-fit lg:h-fit p-8 md:p-20 space-y-8 md:space-y-14 flex  flex-col">
    <div className="flex w-full max-w-7xl mx-auto items-center justify-center space-x-4">
          {/* Left box */}
          <div className="border-2 border-purple-600 flex items-center justify-center w-10 h-10">
            <p className="font-semibold text-purple-600800">C</p>
          </div>

          {/* Text and line */}
          <div className="flex items-center w-full space-x-2">
            <h2 className="text-lg font-semibold text-purple-600 whitespace-nowrap">
              PROCESS
            </h2>
            <div className="flex-1 border-t border-purple-600"></div>
          </div>
        </div>
        <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-2 lg:gap-4 md:space-x-10 mx-auto max-w-7xl ">
        <div className=""><h2 className="font-medium text-2xl md:text-4xl lg:w-52 ">Our Woking Process</h2></div>
        {
            data.map((item)=>(
                <div key={item.id} className="space-y-8  ">
                    <p className="font-medium text-lg text-muted-foreground">#{item.id}</p>
                    <p className="font-medium text-xl lg:text-2xl text-purple-600">{item.title}</p>
                    <p className="text-neutral-600 lg:text-md">{item.description}</p>

                </div>
            ))
        }
        
        </div>
  </section>;
}

export default Service;