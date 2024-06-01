import developer1 from "../../../assets/img/izuku.png";
import developer2 from "../../../assets/img/katsuki.png";
import developer3 from "../../../assets/img/ochako.png";
import developer4 from "../../../assets/img/shoto.png";

export const Acerca = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src={developer1}
                  className="card-img-top"
                  alt="Izuku Desarrollador J"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Desarrollador Junior</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Midoriya Izuku es un joven que tuvo la desgracia de nacer
                    sin Don, un poder que poseen actualmente el 80 % de los
                    humanos y que él querría usar para convertirse en un héroe
                    como su adorado All Might. Su falta de Don no impide que su
                    objetivo siga siendo acudir a la mejor academia de héroes
                    del país.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={developer2}
                  className="card-img-top"
                  alt="Katsuki Desarrollador S"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Desarrollador Senior</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Katsuki Bakugo (爆ばく豪ごう勝かつ己き Bakugō Katsuki ?) es un estudiante de la
                    Clase 1-A de la Academia U.A., que está entrenando para
                    convertirse en un Héroe. Es el deuteragonista de la serie y
                    amigo de la infancia convertido en rival de Izuku Midoriya.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={developer3}
                  className="card-img-top"
                  alt="Ochaco Arquitecta de Software"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Arquitecta de Software</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Ochaco Uraraka (麗うらら日かお茶ちゃ子こ Uraraka Ochako ?),
                    también conocida como Uravity (ウラビティ Urabiti ?), es una
                    estudiante de la Clase 1-A de la Academia U.A. que está
                    entrenando para convertirse en un Heroína profesional. Es
                    una de los protagonistas de la serie.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={developer4}
                  className="card-img-top"
                  alt="Shoto Líder de proyecto"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Líder de proyecto</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Shoto Todoroki (轟とどろき焦しょう凍と Todoroki Shōto ?), o
                    simplemente Shoto (ショート Shōto ?), es el tritagonista del
                    manga y anime My Hero Academia. Es un estudiante de la Clase
                    1-A de la Academia U.A, donde ingresó a través de
                    recomendaciones oficiales y está entrenando para convertirse
                    en un Héroe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
