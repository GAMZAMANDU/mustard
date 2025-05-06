import Text from "../components/Text";
import Article from "../components/home/Article";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#1A1A1A]">
      <h1 className="font-bold text-[2rem] text-[#ffffff] m-[0px]">
        Get Actionable Feedback on Your Designs
      </h1>
      <Text
        color="gray"
        weight="normal"
        size="md"
        text="Upload your web designs and receive precise, element-specific feedback from peers and experts. Improve your UI/UX with contextual comments."
        className="mb-[2.5rem]"
      />
      <div className="flex gap-[2.5rem]">
        <Article
          name="Netflix"
          description="Watch TV shows online, watch movies online"
          img="/assets/ui/Netflix-2.png"
          reviewer="/assets/ui/Netflix.png"
        />
        <Article
          name="Google Gemini"
          description="Chat to supercharge your ideas"
          img="/assets/ui/Gemini-0.png"
          reviewer="/assets/ui/Gemini.png"
        />
      </div>
    </main>
  );
};

export default HomePage;
