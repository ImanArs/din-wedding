import './App.modules.scss';

function App() {
    return (
        <>
            <div className="header">
                <h1 className="text-header">D & A</h1>
            </div>
            <div>
                <div className="image">
                    <div className="text-block">
                        {/* <h2>MALVIN & JEANNETE</h2> */}
                        <h2>
                            Динмухамед <br /> & <br />
                            Айзирек
                        </h2>
                    </div>
                        <img src="https://multi-admin.ru/mediabank_blog/11/152087/654d1d44a3851be00632a5826d5a4e4eistock-940217166.jpg" />
                    <div className='bg-opacity-image'>
                    </div>
                </div>
                {/* <img className="q13" src="./qaz.svg" alt="" /> */}
                {/* <img className="q10" src="./qaz.svg" alt="" />
                <img className="q11" src="./qaz.svg" alt="" />
                <img className="q12" src="./qaz.svg" alt="" /> */}
            </div>

            <div className="App">
                <img className="q10" src="./qaz.svg" alt="" />
                <img className="q11" src="./qaz.svg" alt="" />
                <img className="q12" src="./qaz.svg" alt="" />
                <img className="q1" src="./qwe.svg" alt="" />
                <img className="q2" src="./qwe.svg" alt="" />
                <img className="q7" src="./qwe.svg" alt="" />
                <img className="q8" src="./qwe.svg" alt="" />
                <div className="main">
                    <div className="textblock">
                        <h1>THE WEDDING</h1>
                        <h2>
                            Динмухамед <br /> & <br />
                            Айзирек
                        </h2>
                            <img className="q3" src="./qaz.svg" alt="" />
                        <br />
                        <br />
                    </div>
                    <div className="block">
                        <img className="q4" src="./zxc.svg" alt="" />
                        <div className="block1">
                            <div className="data1">
                                <img src="./date.svg" alt="" />
                                <p>Воскресенье, 24го сентября</p>
                            </div>
                            <div className="data1">
                                <img src="time.svg" alt="" />
                                <p>В 17:00</p>
                            </div>
                            <div className="data1">
                                <img src="./place.svg" alt="" />
                                <a href="https://2gis.kg/bishkek/firm/70000001019338833?m=74.659138%2C42.887926%2F18.99" target='_blank' rel='norefer'><p>Алтын Казына</p></a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <img className="q5" src="./qaz.svg" alt="" />
                    <img className="q6" src="./qaz.svg" alt="" />
                    <div className="block2">
                        <div className="block22">
                            <div className='block22-2'>
                                <span>
                                    Если вы получили эту ссылку, значит мы захотели, чтобы вы стали
                                    свидетелем самого важного события для нашей семьи – День нашей
                                    свадьбы.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
