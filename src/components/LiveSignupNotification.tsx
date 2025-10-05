 // src/components/LiveSignupNotification.tsx
 import { useState, useEffect } from 'react';
 import { Zap } from 'lucide-react';
 
 const names = ['Michael S.', 'Jennifer L.', 'Chris B.', 'David R.', 'Sarah K.', 'Maria G.', 'James P.'];
 const locations = ['New York', 'London', 'Berlin', 'Sydney', 'Toronto', 'Los Angeles', 'Chicago'];
 
 const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
 const getRandomInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
 
 export const LiveSignupNotification = () => {
   const [notification, setNotification] = useState('');
   const [isVisible, setIsVisible] = useState(false);
 
   useEffect(() => {
     const showNotification = () => {
       const name = getRandomItem(names);
       const location = getRandomItem(locations);
       setNotification(`${name} from ${location} just claimed their blueprint!`);
       setIsVisible(true);
 
       // Hide notification after a few seconds
       setTimeout(() => {
         setIsVisible(false);
       }, 4000); // Visible for 4 seconds
     };
 
     // Initial delay before the first notification
     const initialTimeout = setTimeout(showNotification, 3000);
 
     // Set interval for subsequent notifications
     const notificationInterval = setInterval(() => {
       // Wait for a random time before showing the next one
       setTimeout(showNotification, getRandomInterval(5000, 12000)); // Show next notification between 5 and 12 seconds
     }, 10000); // This outer interval just ensures it keeps running
 
     return () => {
       clearTimeout(initialTimeout);
       clearInterval(notificationInterval);
     };
   }, []);
 
   return (
     <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
       {notification && (
         <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm text-primary animate-pulse">
           <Zap className="w-4 h-4" />
           <span>{notification}</span>
         </div>
       )}
     </div>
   );
 };
