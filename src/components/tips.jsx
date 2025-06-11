import React, { useState } from "react";
import './tips.css';
export default function Tips() {
  const [searchQuery, setSearchQuery] = useState("");

  const tipsData = [
    { title: "Flavor it", content: "Add fruit to your water. Lemons, limes and oranges are tried and true. Cucumber, watermelon, strawberries and herbs also are delicious options." },
    { title: "Tie it into a routine", content: "Drink a glass of water every time you brush your teeth, eat a meal or use the bathroom." },
    { title: "Eat it", content: "Many fruits and vegetables have a high water content, including melon, cucumbers, lettuce and celery." },
    { title: "Track it", content: "Invest in a high-tech bottle that connects to your smartphone and records how much you drink. Or set an alarm as a reminder and track your intake in your calendar." },
    { title: "Challenge a friend", content: "Kick off a healthy competition with a friend or your kids to see who can meet their guzzling goal most often." },
    { title: "Make It Accessible", content: "Keep a water bottle within reach at all times, whether you're at your desk, in the car, or watching TV. Having it nearby makes it easier to remember to drink." },
    { title: "Go for a Water Break", content: "Take small water breaks throughout the day, especially during work or study sessions. It helps you stay hydrated and refreshes your mind." },
    { title: "Drink Before You're Thirsty", content: "Don't wait until you're thirsty to drink. By the time you feel thirsty, you may already be dehydrated. Keep sipping regularly." },
    { title: "Get Creative with Water Recipes", content: "Try making homemade flavored water recipes or water-based smoothies. Adding a variety of ingredients like herbs, fruits, or even tea bags can keep it interesting." },
    { title: "Use Hydration Reminders", content: "Set a hydration goal for the day and track your progress with apps or reminders. Some apps even give you notifications to encourage you to drink more throughout the day." },
    { title: "Hydrate After Exercise", content: "Always hydrate after physical activities to replenish lost fluids. Adding a pinch of salt to your water can help replace electrolytes too." },
    { title: "Monitor Your Urine Color", content: "Keep an eye on the color of your urine—it should be light yellow. Dark urine can be a sign of dehydration and a signal to drink more water." },
  ];


  const filteredTips = tipsData.filter(tip => 
    tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tip.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1>Tips for Staying Hydrated</h1>

  
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Search Tips..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '80%', 
            maxWidth: '500px', 
            padding: '0.8rem 1rem',
            borderRadius: '25px',
            border: '2px solid #5c7cfa',
            fontSize: '1.1rem',
            color: '#333',
            background: '#fff',
            outline: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'border-color 0.3s ease'
          }}
        />
      </div>

      
      <div className="tips-grid">
        {filteredTips.map((tip, index) => (
          <div key={index} className={`tip-card shade-${index % 6}`}>
            <h4>{tip.title}</h4>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
