'use client'
import './not-found.scss'
import {EPages} from "../types/types";
import {store} from "../assets/store";
import {useRouter} from "next/navigation";

import Header from "../components/Header/Header";

const NotFound = () => {
	const router = useRouter();

	return (
		<div className={'not_found_page'}>
			<Header page={EPages.not_found_page} links={store.not_found_page.headerLinks}/>
			<div className={'not_found_page__content'}>
				<h1 className={'not_found_page__title'}>404</h1>
				<h2 className={'not_found_page__text'}>Упс! Кажется такой страницы нет...</h2>
				<div className={'not_found_page__buttons'}>
					<button onClick={() => router.back()} className={'not_found_page__button'}>Назад</button>
					<button onClick={() => router.back()} className={'not_found_page__link'}>На главную</button>
				</div>
			</div>
		</div>
	)
}

export default NotFound;