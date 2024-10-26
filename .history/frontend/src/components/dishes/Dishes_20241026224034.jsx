import Menu  from '../Menu';
import Navbar from '../Navbar'
import Footer from '../Footer'
import './dishes.css';


const Dishes = () => {
    return (
        <>
        <Navbar/>
        <Menu/>
        
        <section className="menu-section">
            <h2 className="menu-title">Our Menu</h2>
            {menuItems.map((category, index) => (
                <div key={index} className="menu-category">
                    <h3 className="category-title">{category.category}</h3>
                    <div className="menu-items">
                        {category.items.map(item => (
                            <div key={item.id} className="menu-item">
                                <h4 className="item-name">{item.name}</h4>
                                <p className="item-description">{item.description}</p>
                                <span className="item-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
        <Footer/>
        </>
    );
};

export default Dishes;
