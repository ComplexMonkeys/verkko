export const Projects = () => {
  return (
    <>
      <h1 className="font-bold text-4xl text-center mb-8 mt-12 text-amber-500">Projects</h1>
      <div className="flex flex-wrap justify-center lg:space-x-8 lg:mx-auto max-w-screen-xl">
        <ProjectBox
          title="SlayerCalc"
          imageUrl="/slayercalc.png"
          sourceCodeUrl="https://github.com/ComplexMonkeys/slayercalc"
          deploymentUrl="https://slayer.verkko.dev/"
          description="A calculator app for slayer tasks in Old School RuneScape."
        />
      </div>
    </>
  );
};


interface ProjectBoxProps {
  title: string;
  imageUrl: string;
  sourceCodeUrl: string;
  deploymentUrl: string;
  description: string;
}

const ProjectBox = ({ title, imageUrl, sourceCodeUrl, deploymentUrl, description }: ProjectBoxProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl border-neutral-700 border my-4 lg:my-0 mx-4 lg:mx-0">
      <img className="w-full h-96 border-b border-neutral-700" src={imageUrl} alt={title} />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2 text-amber-500">{title}</div>
        <p className="text-white text-base">{description}</p>
        <div className="mt-4 flex justify-between">
          <a href={sourceCodeUrl} className="bg-blue-500 hover:brightness-75 text-white font-bold py-2 px-4 rounded">
            Source Code
          </a>
          <a href={deploymentUrl} className="bg-green-500 hover:brightness-75 text-white font-bold py-2 px-4 rounded">
            Deployment
          </a>
        </div>
      </div>
    </div>
  );
};

