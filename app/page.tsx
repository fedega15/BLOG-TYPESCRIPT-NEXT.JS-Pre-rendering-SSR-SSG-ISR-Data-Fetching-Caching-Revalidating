import Posts from "./components/Posts"

export default function Home() {
  return (
      <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
      👋&nbsp;
        <span className="whitespace-nowrap">
          Mi nombre es <span className="font-bold">Federico</span>. Les dejo algunas practicas!
        </span>
      </p>
      <Posts />
    </main>
    
  )
}
