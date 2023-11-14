import React from 'react'
import Image from 'next/image'
import Calendar from '../Assets/Calendar'
import Avatar from '../Assets/Avatar'
import * as dateFns from "date-fns";
import styles from "../../styles/SemuaBerita.module.scss";
import { DetailBerita } from "../../constants/types";
import { API_URL } from "../../constants";
import Link from 'next/link'


export default function CardNews({key,berita}:{key: number,berita:DetailBerita}) {
  return (
    <Link key={key} href={`/berita/${berita.id}`} passHref>
      <a  className={styles.news_card}>
        <div className={styles.news_thumbnail}>
          <img src={berita.cover ? API_URL + berita.cover.url : 'placeholder_image_url'} alt="berita" />
        </div>
        <div className="flex w-full h-fit justify-between items-center font-light">
        
        <p className={styles.news_date}>
          <img className="inline w-[24px] h-[24px] mr-1 m-auto" width={24} height={24} alt="date" src="icons/date.svg"/>
          {dateFns.format(
            new Date(berita.news_date),
            "d MMMM yyyy"
          )}
        </p>
        <p className="text-[12px]">
        <img className="inline w-[24px] h-[24px] mr-1" width={24} height={24} alt="date" src="icons/user.svg"/>
          {berita.author.firstname}
        </p>
        </div>
        <h3 className={styles.news_title}>{berita.judul}</h3>

        <p className={styles.news_desc}>
          {berita.pratinjau.length > 100
            ? berita.pratinjau.slice(0, 100) + "..."
            : berita.pratinjau}
        </p>
      </a>
    </Link>
  )
}
