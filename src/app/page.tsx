import React from "react";
import s from './page.module.scss';

import MainScreen from "@/components/MainScreen/MainScreen";
import Prices from "@/components/Prices/Prices";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";
import Table from "@/components/Table/Table";
import NavLinks from "@/components/NavLinks/NavLinks";
import Faq from "@/components/Faq/Faq";
import Instructions from "@/components/Instructions/Instructions";
import Video from "@/components/Video/Video";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";

import {EPages, IInstructionsData, ITableData, IVideoProps} from "@/types/types";

const Home = () => {
    const firstTableData: ITableData = {
        thead: ['Комплектация', 'Рабочая высота (м)', 'Общая высота (м)', 'Высота до настила (м)', 'Вес (ВСР-1), кг', 'Вес (ВСР-4), кг', 'Вес (ВСР-7), кг'],
        tbody: [
            ['1 промежуточная секция + базовый блок', '7,6', '7,6', '7,6', '7,6', '7,6', '7,6'],
            ['2 промежуточная секция + базовый блок', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6'],
            ['3 промежуточная секция + базовый блок', '250', '250', '250', '250', '250', '250'],
            ['4 промежуточная секция + базовый блок', '1', '1', '1', '1', '1', '1'],
            ['5 промежуточная секция + базовый блок', '1,23', '1,23', '1,23', '1,23', '1,23', '1,23'],
            ['6 промежуточная секция + базовый блок', '0,84х2', '0,84х2', '0,84х2', '0,84х2', '0,84х2', '0,84х2'],
            ['7 промежуточная секция + базовый блок', '7,6', '7,6', '7,6', '7,6', '7,6', '7,6'],
            ['8 промежуточная секция + базовый блок', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6'],
            ['9 промежуточная секция + базовый блок', '250', '250', '250', '250', '250', '250'],
            ['10 промежуточная секция + базовый блок', '1', '1', '1', '1', '1', '1'],
            ['11 промежуточная секция + базовый блок', '1,23', '1,23', '1,23', '1,23', '1,23', '1,23'],
            ['12 промежуточная секция + базовый блок', '0,84х2', '0,84х2', '0,84х2', '0,84х2', '0,84х2', '0,84х2'],
            ['13 промежуточная секция + базовый блок', '250', '250', '250', '250', '250', '250'],
            ['14 промежуточная секция + базовый блок', '1', '1', '1', '1', '1', '1'],
            ['15 промежуточная секция + базовый блок', '1,23', '1,23', '1,23', '1,23', '1,23', '1,23'],
            ['16 промежуточная секция + базовый блок', '0,84х2', '0,84х2', '0,84х2', '0,84х2', '0,84х2', '0,84х2'],
        ]
    }

    const secondTableData: ITableData = {
        thead: ['', 'Вышка тура ВСР-1', 'Вышка тура ВСР-1', 'Вышка тура ВСР-1'],
        tbody: [
            ['Максимальная высота вышки, м', '7,6', '7,6', '7,6'],
            ['Размеры рабочей площадки, м:', '0,7 * 1,6', '0,7 * 1,6', '0,7 * 1,6'],
            ['Максимальная нагрузка на вышку, кг', '250', '250', '250'],
            ['Количество настилов, шт', '1', '1', '1'],
            ['Высота секции вышки, м', '1,23', '1,23', '1,23'],
            ['Размер колесного основания в сборе, м', '0,84х2', '0,84х2', '0,84х2'],
        ]
    }

    const instructionsData: IInstructionsData[] = [
        {
            text: 'Монтаж вышки туры начинается с установки двухколесных балок. Вывернутые винтовые опоры ставим балки на ровную поверхность с замками внутрь параллельно друг другу. Сверху на стаканы базы прикладываем длинную объемную диагональ синего цвета. Обратите внимание на то, что эта деталь не вставляется в колесную базу, а именно прикладывается сверху.',
            image: 'image'
        },
        {
            text: 'Далее вставляем лестницы секции через объемную диагональ длинными концами вниз, тем самым скрепляя предыдущие детали. Берем 4 стяжки желтого цвета, которые соединяют между собой лестницы и основание. Соединяем их между собой с помощью флажков замков последовательно по часовой стрелке. Теперь на лестнице основания надеваем гантели синего цвета и также закрепляем их между собой в той же последовательности с помощью желтых стяжек.',
            image: 'image',
            textAfterImage: 'После того как мы собрали полностью первую секцию, необходимо слегка встряхнуть получившуюся конструкцию и такую манипуляцию нужно будет проделать каждой последующей секции, чтобы убедиться, что все соединения плотно сели на свои места.'
        },
        {
            text: 'Теперь можно приступить к выравниванию туры по уровню с четырех сторон с помощью винтовых опор. На этом сборка первой части завершена. Теперь мы по такому же принципу можем продолжить монтаж последующих секций. На гантели синего цвета надеваем желтый рамы, крепим конструкции четырьмя стяжками, на этом моменте можно установить настил. Далее сверху снова установленных гантели и еще 4 стяжки. Когда все промежуточные секции готовы, у нас остаются детали красного цвета. Это секция ограждения. Берем лестницы ограждения и вставляем в гантели последней секции, также друг напротив друга. Далее берем 4 стяжки и закрепляем ими лестницы к гантелям предыдущий секции.\n',
            image: 'image'
        },
        {
            text: 'На поперечные лестницы ограждения устанавливаем настил с люком и перекладину ограждения с помощью тех же флажковых соединений, к которым крепились стяжки. Устанавливаем гантели ограждения. Теперь осталось закрепить гантели. Для этого берем оставшийся 4 стяжки и соединяем ими гантели с лестницами. За счет расстояния между ступенями мы можем регулировать высоту установки настила каждые 40 сантиметров.\n',
            image: 'image'
        },
        {
            text: 'Для обеспечения дополнительной устойчивости предусмотрена установка двух стабилизатора, которые рекомендуют устанавливать при высоте вышки более 6 метров. Cтабилизаторы крепится хомутами к основной конструкции вышки.\n',
            image: 'image'
        },
    ]

    const firstVideoData: IVideoProps = {
        title: 'Видео инструкция по установке вышки туры',
        video: ''
    }

    const secondVideoData: IVideoProps = {
        title: 'Видео инструкция комплекта для установки на лестничный марш для вышки тура',
        video: ''
    }



    return (
        <div className={s.home}>
            <MainScreen viewMode={{'page': EPages.tower, 'component': 'main_screen'}}/>
            <Prices viewMode={{'page': EPages.tower, 'component': 'main_screen'}}/>
            <Benefits/>
            <Order/>
            <div className={'container'}>
                <h2 className={s.table_title}>Технические характеристики вышки туры передвижной</h2>
                <Table tableData={firstTableData}/>
            </div>
            <div className={'container'}>
                <h2 className={s.table_title}>Подробные технические характеристики вышки туры передвижной</h2>
                <Table tableData={secondTableData}/>
            </div>
            <NavLinks viewMode={{'page': EPages.tower, 'component': 'none'}}/>
            <Faq/>
            <Instructions instructionsData={instructionsData}/>
            <div className={s.videos_section}>
                <Video videoData={firstVideoData}/>
                <Video videoData={secondVideoData}/>
            </div>
            <MoreQuestions/>
        </div>
    )
}

export default Home;
