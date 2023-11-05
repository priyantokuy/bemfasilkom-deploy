import React, { useRef, useState } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../../styles/SemuaBerita.module.scss";
import { Event } from "../../constants/types";
import { API_URL } from "../../constants";
import Link from "next/link";
import { useDarkNavLinks } from "../../hooks/useDarkNavLinks";
import * as dateFns from "date-fns";
import { DocumentHead } from "../../components/DocumentHead";
import { useDispatch } from 'react-redux'
import { setStatePageVisit } from '../../store/pageVisitSlices'



const Events: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  (props) => {
    const dispatch = useDispatch()
    dispatch(setStatePageVisit({page:'event'}))
    const { listEvents, EventsCount } = props;
    const paginationStart = useRef(listEvents.length);
    const [EventsList, setEventsList] = useState(listEvents);
    const [isFetchingNewData, setIsFetchingNewData] = useState(false);
    useDarkNavLinks();

    return (
      <>
        <DocumentHead pageTitle="Event" />
        <div className={styles.container}>
          {EventsList.length > 0 ? (
            <>
              <div className={styles.berita_list_container}>
                {EventsList.map((Events, idx) => {
                  return (
                    <Link  key={idx} href={Events.direct_link}>
                      <a className={styles.news_card}>
                        <div className={styles.news_thumbnail}>
                          <img src={API_URL + Events.event_image.formats.thumbnail.url} alt="Events" />
                        </div>
                        <h3 className={styles.news_title}>{Events.name}</h3>
                        <p className={styles.news_date}>
                          Start : {dateFns.format(
                            new Date(Events.start_date),
                            "d MMMM yyyy"
                          )}
                        </p>
                        <p className={styles.news_date}>
                          End : {dateFns.format(
                            new Date(Events.end_date),
                            "d MMMM yyyy"
                          )}
                        </p>
                        
                        <p className={styles.news_desc}>
                          {Events.deskripsi.length > 200
                            ? Events.deskripsi.slice(0, 200) + "..."
                            : Events.deskripsi}
                        </p>
                      </a>
                    </Link>
                  );
                })}
              </div>
              {EventsList.length < EventsCount ? (
                <button
                  className={styles.news_load_more}
                  disabled={isFetchingNewData}
                  onClick={() => {
                    setIsFetchingNewData(true);
                    fetch(
                      `${API_URL}/projects?_sort=created_at:DESC&_start=${paginationStart.current}&_limit=3`
                    ).then(async (res) => {
                      res.json().then((newNews) => {
                        setEventsList((prevState) => {
                          return [...prevState, ...newNews];
                        });
                        setIsFetchingNewData(false);
                      });
                    });
                  }}
                >
                  {isFetchingNewData ? "Mengambil data" : "Lihat lebih banyak"}
                </button>
              ) : null}
            </>
          ) : (
            <div className={styles.no_news_notice}>
              <h1>Ups, belum ada Event di sini</h1>
            </div>
          )}
        </div>
      </>
    );
  };

type ServerSideData = {
  listEvents: Event[];
  EventsCount: number;
};

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async () => {
    const [EventsList, EventsCount] = await Promise.all([
      await (
        await fetch(
          `${API_URL}/projects?_sort=created_at:DESC&_start=0&_limit=6`
        )
      ).json(),
      await (await fetch(`${API_URL}/projects/count`)).json(),
    ]);

    // di api projects sama dengan event

    console.log(EventsList)

    return {
      props: {
        listEvents: EventsList,
        EventsCount,
      },
    };
  };

export default Events;
