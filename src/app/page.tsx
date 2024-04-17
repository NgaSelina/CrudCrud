import localFont from "next/font/local";
import imageHome from "../../public/image_home.png";
import Image from "next/image";
import FormAdd from "@/components/FormAdd";
import { fetchData } from "@/fetch/fetches";
import { handleDeleteDataAction } from "@/fetch/actions";
import ButtonDelete from "@/components/ButtonDelete";

const myFont = localFont({
  src: "../fonts/Roboto-Regular.ttf",
  display: "swap",
});

export default async function Home() {
  const dataList = await fetchData();

  return (
    <main className={`flex-row pl-[100px] ${myFont.className}`}>
      <div>
        <FormAdd />
      </div>
      <ul className="mt-4">
        {dataList?.map((item: any) => (
          <div key={item._id}>
            <ButtonDelete id={item._id} value={item.value}/>
          </div>
        ))}
      </ul>

      {/* <div className="py-[40px] ">
        <p className='text-[101px] justify-center flex font-normal '>TASMANIA. OUR TIME HAS COME.</p>
        <Image className='justify-center' width={1048} height={556} src={imageHome} alt={'icon search normal'} />
      </div> */}
    </main>
  );
}

