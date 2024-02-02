import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

 const YandexMap = () => (
    <YMaps>
        <Map defaultState={{ center: [53.9995,27.72], zoom: 16}} width={"100%"} height={'350px'}>
            <Placemark geometry={[53.9995,27.72]} />
        </Map>
    </YMaps>
);

export default YandexMap;