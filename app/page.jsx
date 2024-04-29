import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">
      Welcome to PromptShare, your creative hub for inspiration! Discover,
      create, and share prompts to ignite your imagination and connect with
      others.
    </p>

    <Feed />
  </section>
);

export default Home;
