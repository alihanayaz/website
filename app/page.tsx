import Section from "@/_components/Section";
import Profile from "./_components/Profile";

export default function Page() {
  return (
    <>
      <Section>
        <Profile />
      </Section>
      <Section>
        <p>
          Welcome to my digital garden!
          <br />
          I&apos;m a software developer passionate about crafting meaningful
          experiences and sharing my journey along the way.
        </p>
      </Section>
    </>
  );
}
