import {useEffect} from 'react'
import { NextPage } from "next";
import styles from "../styles/NewsDetail.module.scss";
import { useSelector, useDispatch } from 'react-redux'
import { setStatePageVisit } from '../store/pageVisitSlices'
const NewsItem: NextPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setStatePageVisit({page:'berita-detail'}))
  })
  return (
    <main className={styles.main}>
      <section className={styles["head-news"]}>
        <div className={styles["border-shape"]}>
          <div className={styles["border-shape-inside"]}></div>
        </div>

        <h1 className={styles["news-title"]}>
          Ancaman Mahasiswa Terhadap Dosen Fakultas Ilmu Komputer UPN Jawa Timur
          Yang Malas Mengajar
        </h1>

        <p className={styles["news-info-date"]}>~ 02 Agustus 2021 ~</p>
        <br />
        <p className={styles["news-info-author"]}>BEM Fasilkom</p>
      </section>

      <div className={styles["img-container"]}>
        <img src="cover.png" alt="cover" id="img-src" />
      </div>

      <article className={styles["news-content"]}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor
          quis aliquam convallis turpis urna, volutpat feugiat aliquam. Egestas
          amet facilisis congue nisl dapibus viverra mi. Cursus ac tellus,
          aliquam tellus cras elit eget ut amet. Varius porttitor risus lacus
          tristique ultrices ipsum aenean. Mauris ut rutrum urna non.
          Consectetur ac neque tempor massa, eu sed egestas. Tortor morbi
          faucibus ut aliquam diam, dolor lectus. Amet quisque bibendum sit
          nisi, gravida arcu viverra. Enim, non donec nibh ac ornare euismod
          risus. Ultricies eu consectetur in enim aliquam mattis ut posuere.
          Malesuada consectetur enim nunc, euismod amet ullamcorper tellus.
          Morbi placerat vitae sociis volutpat quis. Ut tincidunt purus cursus
          morbi lectus purus eget.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor
          quis aliquam convallis turpis urna, volutpat feugiat aliquam. Egestas
          amet facilisis congue nisl dapibus viverra mi. Cursus ac tellus,
          aliquam tellus cras elit eget ut amet. Varius porttitor risus lacus
          tristique ultrices ipsum aenean. Mauris ut rutrum urna non.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor
          quis aliquam convallis turpis urna, volutpat feugiat aliquam. Egestas
          amet facilisis congue nisl dapibus viverra mi. Cursus ac tellus,
          aliquam tellus cras elit eget ut amet. Varius porttitor risus lacus
          tristique ultrices ipsum aenean. Mauris ut rutrum urna non.
          Consectetur ac neque tempor massa, eu sed egestas. Tortor morbi
          faucibus ut aliquam diam, dolor lectus. Amet quisque bibendum sit
          nisi, gravida arcu viverra. Enim, non donec nibh ac ornare euismod
          risus.
        </p>
        <div className={styles["content-quote"]}>
          <p>
            <i>
              &quot; ipsum dolor sit amet, consectetur adipiscing elit. In
              tortor quis aliquam convallis turpis urna, volutpat feugiat
              aliquam. Egestas amet facilisis congue nisl dapibus viverra mi.
              Cursus ac tellus, aliquam tellus cras elit eget ut amet. &quot;
            </i>
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor
          quis aliquam convallis turpis urna, volutpat feugiat aliquam. Egestas
          amet facilisis congue nisl dapibus viverra mi. Cursus ac tellus,
          aliquam tellus cras elit eget ut amet. Varius porttitor risus lacus
          tristique ultrices ipsum aenean. Mauris ut rutrum urna non.
          Consectetur ac neque tempor massa, eu sed egestas. Tortor morbi
          faucibus ut aliquam diam, dolor lectus. Amet quisque bibendum sit
          nisi, gravida arcu viverra. Enim, non donec nibh ac ornare euismod
          risus.
        </p>
      </article>

      <div className={styles["border-shape-down"]}></div>
    </main>
  );
};

export default NewsItem;
