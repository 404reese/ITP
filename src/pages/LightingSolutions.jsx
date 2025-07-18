import React from "react";
import { motion } from "framer-motion";
import Form from "../components/Form";
import solar from "../assets/solar.png";
import grid from "../assets/grid.png";
const LightingSolutions = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Lighting Solutions
        </h2>
        
        {/* LED Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-8"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">LED Lighting Solutions</h3>
          <div className="text-gray-700">
            <div className="space-y-4">
              <p><strong>Energy Efficient LED Solutions:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>High-efficiency LED bulbs and fixtures</li>
                <li>Smart LED systems with dimming capabilities</li>
                <li>Industrial LED lighting solutions</li>
                <li>Residential LED upgrade packages</li>
              </ul>
              <p><strong>Benefits:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Up to 80% energy savings compared to traditional lighting</li>
                <li>Longer lifespan (25,000+ hours)</li>
                <li>Reduced maintenance costs</li>
                <li>Instant on/off capability</li>
              </ul>
              <p className="italic text-blue-600">Contact us for detailed specifications and customized LED solutions for your space.</p>
            </div>
          </div>
        </motion.div>

        {/* Solar Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-8"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Solar Lighting Solutions</h3>
          <div className="text-gray-700">
            <div className="space-y-4">
              <img src={solar} alt="Solar Lighting Solutions" className="w-full h-auto object-cover rounded-lg mb-4" />
              <img src={grid} alt="Solar Lighting Solutions" className="w-full h-auto object-cover rounded-lg mb-4" />

              <p><strong>Top 8 benefits of using an on-grid solar system</strong></p>
              <p>A solar system is of 3 types: on-grid, off-grid, and hybrid. Although there are three types, it's the on-grid solar system that's used and trusted by most homeowners / Factory owners in India. Naturally, there ought to be some extraordinary benefits of an on-grid solar system for home / Factory.</p>
              
              <p><strong>Those are the benefits we're focusing on:</strong></p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>It's easy to keep a track of the units of electricity that your solar system generated</li>
                <li>It's easier to understand the solar electricity bill</li>
                <li>Once the solar on-grid system's price breaks even in 3 to 5 years, you get free solar electricity for the next 20-22 years</li>
                <li>The monthly electricity bill reduces substantially</li>
                <li>There's no battery requirement. Your grid plays the role of the battery. The system will directly supply excess units to the grid and take them back when needed</li>
                <li>Since there's no battery, there are no battery replacement charges involved</li>
                <li>Out of all the 3 types of solar systems, the on-grid solar system for homes / Factory is the most affordable option</li>
                <li>The government offers a subsidy only on an on-grid solar system for residential homes / Factory (that use DCR panels)</li>
              </ol>

              <p><strong>ROI on the on-grid solar system, India</strong></p>
              <p>The return on investment depends on a lot of factors: the type of solar panels you chose, the amount of sunlight your house receives, the discovered rate (L1 rate) in your state, and much more.</p>
              
              <p><strong>Let's walk you through an example:</strong></p>
              <p>Let's assume, you get a 5 kW solar system worth ₹2,80,000 after subsidy, the electricity tariff in your state is ₹8, and your average monthly power consumption is 580-600 units.</p>
              
              <p>The electricity bill you will pay without a solar system will be approximately ₹4640 to ₹4800.</p>
              
              <p>When you install a 5 KW solar system, you get an average of 580-600 units/months from solar. It will be a bit higher in the summer months and lower in the monsoon season.</p>
              
              <p>Now, almost all your power requirements will be met by solar electricity. Hence, it's even possible that you won't have to pay anything to the discom at all.</p>
              
              <p>You'll save approx ₹4640 to ₹4800/month. Your yearly savings will be about ₹55,680. Within approximately 4 to 5 years, the initial investment will break even.</p>
              
              <p>For the next 20 years, you'll save a lot more than ₹11,69,280. This is the minimum return you'll get after investing just ₹2,80,000.</p>
              
              <p>The reason we say that the return of 11 lakh rupees is minimum is because the price of electricity keeps increasing by 3-5% every year. Hence, your savings will also keep increasing.</p>
            </div>
          </div>
        </motion.div>

        {/* Energy Saving Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md mb-8"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Lighting and Devices Automation in Offices</h3>
<div className="text-gray-700">
  <div className="space-y-4">
    <p><strong>Why Lighting and Devices Automation?</strong></p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Save Energy and Go Green – A need to reduce carbon footprints.</li>
      <li>Reduce Electricity Bills – A business necessity.</li>
      <li>Lighting System – Creates good ergonomics, increasing productivity.</li>
      <li>Easy Maintenance – Helps facility managers pinpoint and fix issues quickly.</li>
      <li>Convenience and Comfort – Improves employee satisfaction and well-being.</li>
    </ul>

    <p><strong>Lights, AC, and Blinds Automation</strong></p>
    <h4 className="text-xl font-semibold text-blue-600">Lights Automation Controls</h4>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Lighting is a key factor in workplace ergonomics, influencing comfort and focus.</li>
      <li>Daylight and artificial light must be combined appropriately to create optimal illumination for the workspace.</li>
      <li>Automation plays a key role in daylight harvesting, adjusting the light levels based on natural light availability.</li>
      <li>Occupant-responsive technology offers both energy savings and enhanced employee satisfaction by enabling controls based on:</li>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Occupancy-based control</li>
        <li>Ambient light-based control</li>
        <li>Timer-based control</li>
      </ul>
      <li>More sophisticated, rule-based intelligent systems integrate lights, dimmable ballasts, sensors, and control modules.</li>
    </ul>

    <h4 className="text-xl font-semibold text-blue-600">AC and Blinds Controls</h4>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Climate control combines AC temperature and blinds management (heat from windows).</li>
      <li>Automation adjusts the temperature based on occupancy, time of day, and external heat factors, saving energy and improving user experience.</li>
      <li>Temperature rules ensure ideal climate conditions with minimal manual adjustments required.</li>
    </ul>

    <h4 className="text-xl font-semibold text-blue-600">Energy Management with Silvan’s Automation Technology</h4>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Lighting typically accounts for 35-45% of annual electricity bills in offices.</li>
      <li>Energy-efficient workplaces are a top priority due to rising energy costs.</li>
      <li>Automated features in offices save energy while enhancing comfort and productivity.</li>
      <li>Dimming features for lights are the first step in effective energy management.</li>
      <li>Automated systems adjust lights, blinds, and AC based on occupancy and environmental factors.</li>
      <li>By automating office systems, energy usage is optimized, and carbon footprints are reduced.</li>
    </ul>

    <h4 className="text-xl font-semibold text-blue-600">Silvan’s Revolutionary IoT Lighting Management</h4>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Distributed IoT nodes with no single point of failure for reliable operation.</li>
      <li>Cloud-enabled yet local operation, ensuring minimal internet dependency.</li>
      <li>Internal IFTTT (If This Then That) rules for offline processing at the IoT nodes.</li>
      <li>Advanced scheduling with NTP-enabled Real Time Clock (RTC) for accurate, internet-independent triggers.</li>
      <li>Customizable sensor integration for augmented automation, including ambient light and motion sensors.</li>
      <li>Seamless integration with blinds and AC controls for enhanced energy management.</li>
      <li>Factory-built-in smart energy management rules for optimized usage.</li>
    </ul>

    <h4 className="text-xl font-semibold text-blue-600">Areawise Automation Needs</h4>
    <p>Each office area requires different lighting and climate automation. Below is an example rule set for a typical office corridor:</p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>The corridor lights are dimmed to a low level, as set by the facility manager based on the time of day.</li>
      <li>When someone enters, occupancy sensors adjust the light level to a medium setting.</li>
      <li>The occupant can adjust the lighting to their preferred level (high, medium, or low).</li>
      <li>Once the occupant leaves, the lights return to the facility manager’s preset level, depending on the time of day.</li>
      <li>Energy conservation rules are applied based on the time of day, helping to reduce energy consumption.</li>
    </ul>

    <p>Consider the following automated schedule for the office:</p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>5AM - 7AM:</strong> Office gets ready, lights dim, shades open, AC turns on in the reception area.</li>
      <li><strong>9AM - 11AM:</strong> Staff arrives, perimeter lighting and shades adjust for daylight harvesting. Meeting rooms and cabins adjust lighting and AC based on occupancy.</li>
      <li><strong>1PM - 3PM:</strong> Afternoon, shades adjust to optimize light usage while avoiding excess heat. Cafeteria lights are turned on, while other areas stay dimmed.</li>
      <li><strong>5PM - 7PM:</strong> Evening, shades adjust to block the setting sun's glare. Corridor and lobby lights turn on at the lowest dimming level.</li>
      <li><strong>9PM - 11PM:</strong> After most staff leave, lights in unoccupied areas turn off, AC shuts down in cabins, and lobby/corridor lights adjust to a higher level.</li>
    </ul>
  </div>
</div>

        </motion.div>
      </div>
      
      <div className="max-w-xl mx-auto px-2 py-10">
        <Form />
      </div>
    </section>
  );
};

export default LightingSolutions;
