import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

 const YandexMap = () => (
    <YMaps>
        <Map defaultState={{ center: [54.00396657058067,27.70507649999999], zoom: 17}} width={"100%"} height={'350px'}>
            <Placemark geometry={[54.00380657058067,27.70499949999999]} />
        </Map>
    </YMaps>
);

export default YandexMap;