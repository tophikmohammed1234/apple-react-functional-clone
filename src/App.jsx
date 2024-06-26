import "bootstrap/dist/css/bootstrap.min.css";
import "./CommonResource/css/bootstrap.css";
import "./CommonResource/css/styles.css";

import Header from "./Header/Header";
import Alert from "./Alert/Alert";
import FirstSection from "./Main/FirstSection";
import SecondSection from "./Main/SecondSection";
import ThirdSection from "./Main/ThirdSection";
import FourthSection from "./Main/FourthSection";
import FifthSection from "./Main/FifthSection";
import SixthSection from "./Main/SixthSection";
import Footer from "./Footer/Footer";

function App() {
	return (
		<div>
			<Header />
			<Alert />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<Footer />
		</div>
	);
}

export default App;
