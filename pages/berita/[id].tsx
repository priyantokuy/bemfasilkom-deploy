import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Berita, DetailBerita } from "../../constants/types";
import Error from "next/error";
import ReactMarkdown from "react-markdown";
import { API_URL } from "../../constants";
import { DocumentHead } from "../../components/DocumentHead";
import * as dateFns from "date-fns";
import {  useDispatch } from 'react-redux'
import { setStatePageVisit } from '../../store/pageVisitSlices'
import Link from "next/link";
import { useEffect } from "react";



const NewsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setStatePageVisit({page:'Berita'}))
  },[dispatch])
  
  // const { errorCode, detailBerita, listBerita } = props;

  // useDarkNavLinks();

  const { errorCode, detailBerita,listBerita } = props;
  if (errorCode || !detailBerita) {
    return (
      <Error
      statusCode={errorCode as number}
      title="Tidak dapat menemukan berita"
      />
      );
    }
    
    return (
      <>
      <DocumentHead pageTitle="Berita" />
      <main className="max-w-960 px-4 md:px-0 pt-20 mx-auto md:max-w-1180">
          <div className="w-full h-full flex flex-col lg:flex-row mt-3">
            <section className="lg:w-[70%]">
              <section className="flex flex-col items-center mb-15 lg:mb-0">
                <button className="w-[106px] h-[34px] rounded-[10px] bg-[#F2DECE] mt-10 text-center flex items-center justify-center text-[#FA6D01]">
                  <p>{detailBerita.category.category}</p>
                </button>
                <h1 className="font-bold text-2.8125em mb-10 mt-15 mx-12 text-center lg:text-32px lg:mx-0">{detailBerita.judul}</h1>
                <p className="mb-10 text-[#FA6D01]">
                  {dateFns.format(new Date(detailBerita.created_at), "d MMMM yyyy")} • By {detailBerita.author.firstname}
                </p>
              </section>

              <div className="w-full h-400px bg-[#dddddd47] flex justify-center items-center mb-40 overflow-hidden">
                <img className="h-full object-contain" src={`${API_URL}${detailBerita.cover.url}`} alt="" />
              </div>

              <article className="font-1.5625em text-justify w-80 mx-auto text-[#121212]">
                <ReactMarkdown transformImageUri={(src, alt, title) => API_URL + src}>
                  {detailBerita.konten}
                </ReactMarkdown>
              </article>
            </section>

            <section className="mt-10 sm:mt-4 lg:mt-9 w-80% mx-auto lg:w-[30%] lg:p-2">
              <h1 className="font-bold text-19px md:text-24px ml-auto md:mb-4 lg:mb-0">Artikel Terbaru</h1>
              <div className="w-full h-[250px] lg:h-fit overflow-y-scroll lg:overflow-y-visible flex flex-col">
                {listBerita.map((article, i) => (
                  <Link key={i} href={`/berita/${article.id}`} passHref>
                    <article className="flex w-full mx-auto mt-3 h-fit cursor-pointer">
                      <img
                        className="h-65px w-65px md:h-[120px] md:w-[120px] lg:w-65px lg:h-65px bg-slate-100 rounded-[10px] mr-3"
                        src={`${API_URL}${article.cover.url}`}
                        alt=""
                      />
                      <h2 className="text-[0.9rem] sm:text-[1.1rem] md:text-[1.65em] lg:text-14px mt-1">{article.judul}</h2>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          </div>
      </main>
    </>
  );
};

type ServerSideData = {
  errorCode: boolean | number;
  detailBerita: DetailBerita;
  listBerita:Berita[]
};

// type URLParams = { id: string };

// export const getStaticPaths = (async () => {
//   return {
//     paths: [
//       {
//         params: {
//           id: 'next.js',
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   }
// }) 

export async function getServerSidePaths() {
  const res = await fetch(`${API_URL}/beritas`);
  const beritas = await res.json()
  console.log('ini')
  console.log(beritas)
  const paths = beritas.map((berita: any) => {
    return{
      params:{
        id:`${berita.id}`,
      }
    }
  });
  return{
    paths,
    fallback: false
  }
}

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async (context) => {
    try {
      console.log('ini id')
      const res = await fetch(`${API_URL}/beritas/${context.params?.id}`);
      // const [beritaList, beritaCount] = await Promise.all([
      //   await (
      //     await fetch(
      //       `${API_URL}/beritas?_sort=created_at:DESC&_start=0&_limit=6`
      //     )
      //   ).json(),
      //   await (await fetch(`${API_URL}/beritas/count`)).json(),
      // ]);
      const beritaList = await (await fetch(`${API_URL}/beritas?_sort=created_at:DESC&_start=0&_limit=3`)).json();
      const beritaCount = await (await fetch(`${API_URL}/beritas/count`)).json();

      const errorCode = res.ok ? false : res.status;
      const detailBerita = res.status === 404 ? null : await res.json();

      return {
        props: {
          errorCode,
          detailBerita,
          listBerita: beritaList,
        },
      };
    } catch (error) {
      console.error("Error in getServerSideProps:", error);

      return {
        props: {
          errorCode: 500, // Internal Server Error
          detailBerita: null,
          listBerita: [],
        },
      };
    }
  };


export default NewsPage;
