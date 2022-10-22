import Footer from "../components/interfaces/Footer";
import Category from "./../components/Sections/Category";
import FoundHeader from "./../components/interfaces/FoundHeader";
import Navbar from "../components/Sections/Navbar";
import List from "../components/Sections/List";
import LostHeader from "./../components/interfaces/LostHeader/index";

export default function Lost() {
	return (
		<>
			<Navbar />
			<div className="p-16">
				<LostHeader />
				<Category />
				<List />
			</div>
			<Footer />
		</>
	);
}