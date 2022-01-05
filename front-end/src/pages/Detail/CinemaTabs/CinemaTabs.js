import React, { useState } from 'react'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube';

const { TabPane } = Tabs;
export default function CinemaTabs(props) {

    const [state, setState] = useState({ tabPosition: 'left' });
    const { cinemas } = useSelector(state => state.CinemaReducer);
    const { movieDetail } = props;
    // console.log(cinemas)

    // const changeTabPosition = e => {
    //     this.setState({ tabPosition: e.target.value });
    // };

    const { tabPosition } = state;

    return (
        <>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Lịch Chiếu" key="1">
                    <Tabs tabPosition={tabPosition}>
                        {cinemas.map((cinema, index) => {
                            return (
                                <TabPane key={index} tab={
                                    <div className="flex flex-row items-center justify-center">
                                        <img className="rounded-full" src={cinema.logoUrl} alt="img.jpg" width={50} />
                                        <span className="text-center ml-3" style={{ fontWeight: "bold" }}>{cinema.name}</span>
                                    </div>
                                }>
                                    Tab 1
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </TabPane>
                <TabPane tab="Xem Trailer" key="3">
                    <Tabs tabPosition={tabPosition}>
                        {cinemas.map((cinema, index) => {
                            return (
                                <TabPane key={index} tab={
                                    <div className="flex flex-row items-center justify-center">
                                        <img className="rounded-full" src={cinema.logoUrl} alt="img.jpg" width={50} />
                                        <span className="text-center ml-3" style={{ fontWeight: "bold" }}>{cinema.name}</span>
                                    </div>
                                }>
                                    <div style={{ textAlign: 'center', padding: 40, margin: 'auto' }}>
                                        <YouTube videoId={movieDetail.trailer} />
                                    </div>
                                </TabPane>
                            )
                        })}
                    </Tabs>

                </TabPane>
                <TabPane tab="Giới Thiệu" key="2">
                    <img src={movieDetail.backgroundIntroUrl} alt="img.jpg" style={{width: '100%'}}/>
                </TabPane>
            </Tabs>
        </>
    )
}
