import { Logo } from "../components/Logo";

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construindo uma <strong>aplicação completa</strong> do zero com <strong>React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet neque nec tempus cursus. Suspendisse dapibus nisi nec risus eleifend pellentesque. Mauris mauris ex, lacinia sed justo eget, ullamcorper aliquam elit. Suspendisse iaculis sollicitudin odio, sed dictum sapien venenatis in. Nulla hendrerit felis eget metus hendrerit, sit amet dapibus magna euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis neque nulla, a rhoncus diam congue non. Vivamus ac ultricies felis.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form action="" method="post">
            
          </form>
        </div>
      </div>
      <img src="/src/assets/code.png" alt="" className="" />
    </div>
  );
}