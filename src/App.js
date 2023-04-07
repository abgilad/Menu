import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import ChosenMenu from './Components/ChosenMenu';
import { useState } from 'react';



function App() {

  const [menuButtons, setMenuButtons] = useState([{
    id: 0, name: 'ארוחת בוקר', menu: [
      {
        name: 'טוסט עם גבינה וביצה',
        description: 'טוסט מעודן עם גבינה רכה וביצה מטוגנת',
        img: '/images/toast.jpg',
        price: 25.50
      },
      {
        name: 'גרנולה עם פירות יבשים',
        description: 'גרנולה בריאה עם פירות יבשים מפנקים',
        img: '/images/granola.jpg',
        price: 22.00
      },
      {
        name: 'קערת פירות',
        description: 'פירות טריים וטעימים ללא חומרי מילוי',
        img: '/images/fruit-bowl.jpg',
        price: 18.00
      }]
  },
  {
    id: 1,
    name: 'צהריים',
    menu: [
      {
        name: 'סלט ירקות עם חזה עוף',
        description: 'סלט ירקות מעורב עם חזה עוף צלוי וטעים',
        img: '/images/salad.jpg',
        price: 32.00
      },
      {
        name: 'פיצה מרגריטה',
        description: 'פיצה טרייה עם רוטב עגבניות וגבינה מוצרלה',
        img: '/images/pizza.jpg',
        price: 42.50
      },
      {
        name: 'קציצות ירקות',
        description: 'קציצות ירקות ביתיות ומעולות',
        img: '/images/veggie-burger.jpg',
        price: 28.00
      }
    ]
  },
  {
    id: 2,
    name: 'ערב',
    menu: [
      {
        name: 'סטייק עגל',
        description: 'סטייק עגל איכותי צלוי למושבע',
        img: '/images/steak.jpg',
        price: 85.00
      },
      {
        name: 'פסטה ברוטב עגבניות',
        description: 'פסטה טרייה ברוטב עגבניות ובזיליקו',
        img: '/images/pasta.jpg',
        price: 38.00
      },
      {
        name: 'מנה ירקות צלויים',
        description: 'מנה מפנקת של ירקות צלויים ובשר טחון',
        img: '/images/veggie-bowl.jpg',
        price: 45.00
      }
    ]
  },
  {
    id: 3,
    name: 'תוספות',
    menu: [
      {
        name: 'פתיתים',
        description: 'פתיתי ביצים טריים ואפויים',
        img: '/images/pasta.jpg',
        price: 12.50
      },
      {
        name: 'פטריות שמפיניון צלויות',
        description: 'פטריות שמפיניון צלויות בתנור',
        img: '/images/mushrooms.jpg',
        price: 16.00
      },
      {
        name: 'גבינת פטה',
        description: 'גבינת פטה מובחרת ופירות יבשים',
        img: '/images/feta-cheese.jpg',
        price: 14.50
      }
    ]
  },
  {
    id: 4,
    name: 'משקאות חמים',
    menu: [
      {
        name: 'קפה אספרסו',
        description: 'קפה אספרסו חזק ואפילו',
        img: '/images/espresso.jpg',
        price: 10.00
      },
      {
        name: 'קפוצינו',
        description: 'קפה אספרסו עם חלב חם וקצפת',
        img: '/images/cappuccino.jpg',
        price: 12.50
      },
      {
        name: 'תה ירוק',
        description: 'תה ירוק אורגני ובריא',
        img: '/images/green-tea.jpg',
        price: 8.50
      }
    ]
  },
  {
    id: 5,
    name: 'משקאות קרים',
    menu: [
      {
        name: 'שייק תותים',
        description: 'שייק עשיר עם תותים ומשקה חלבי',
        img: '/images/smoothie.jpg',
        price: 18.00
      },
      {
        name: 'מוס תפוזים',
        description: 'מוס תפוזים טרי ומפנק',
        img: '/images/orange-juice.jpg',
        price: 12.50
      },
      {
        name: 'שתייה קרה עם נענע',
        description: 'שתייה קרה ומרעננת עם נענע',
        img: '/images/mint-drink.jpg',
        price: 14.50
      }
    ]
  }])

  const [currentMenuPage, setCurrentMenuPage] = useState(null)

  const viewMenu = (a) => {
    console.log(a)
    setCurrentMenuPage(a)
  }


  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main menuButtons={menuButtons} viewMenu={viewMenu} />} />
          <Route path='/:id' element={<ChosenMenu menuButtons={menuButtons} currentMenuPage={currentMenuPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
