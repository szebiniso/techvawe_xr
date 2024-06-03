import Banner from '@/components/Banner';
import Description from '@/components/Description';
import Experience from '@/components/Experience';
import Form from '@/components/Form';
import ContactInfo from '@/components/ContactInfo';
import News from '@/components/News';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-10">
      <Banner />
      <Description />
      <Experience />
      <News />
      <Form />
      <ContactInfo />
    </main>
  );
}
