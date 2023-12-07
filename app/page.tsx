
import styles from "./page.module.css";
import Main from "@/components/Main";
import About from "@/components/About";
import Electricity from "@/components/Electricity";
import Cases from "@/components/Cases";
import Faq from "@/components/FaqSection";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs/>
    </main>
  );
}
