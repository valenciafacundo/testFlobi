import React from "react";
import { TorneosStack, TorneosRoute } from "../routing/routes";
import CalendarioTorneo from "../screens/torneos/CalentarioTorneo";
import Comentarios from "../screens/torneos/Comentarios";
import Inscripciones from "../screens/torneos/Inscripciones";
import NoticiaDetalle from "../screens/torneos/NoticiaDetalle";
import Noticias from "../screens/torneos/Noticias";
import Ranking from "../screens/torneos/Ranking";
import ResultadoDetalle from "../screens/torneos/ResultadoDetalle";
import TorneoEnCurso from "../screens/torneos/TorneoEnCurso";
import Torneos from "../screens/torneos/Torneos";
import Resultados from "../screens/torneos/Resultados";
import TorneoDetalle from "../screens/torneos/TorneoDetalle";

const TorneosMap = () => {
  return (
    <>
      <TorneosStack.Navigator>
        <TorneosStack.Screen
          name={TorneosRoute.TorneosScreen}
          component={Torneos}
        />
        <TorneosStack.Screen
          name={TorneosRoute.CalendarioTorneoScreen}
          component={CalendarioTorneo}
        />
        <TorneosStack.Screen
          name={TorneosRoute.ComentariosScreen}
          component={Comentarios}
        />
        <TorneosStack.Screen
          name={TorneosRoute.InscripcionesScreen}
          component={Inscripciones}
        />
        <TorneosStack.Screen
          name={TorneosRoute.NoticiaDetalleScreen}
          component={NoticiaDetalle}
        />
        <TorneosStack.Screen
          name={TorneosRoute.NoticiasScreen}
          component={Noticias}
        />
        <TorneosStack.Screen
          name={TorneosRoute.RankingScreen}
          component={Ranking}
        />
        <TorneosStack.Screen
          name={TorneosRoute.ResultadoDetalleScreen}
          component={ResultadoDetalle}
        />
        <TorneosStack.Screen
          name={TorneosRoute.ResultadosScreen}
          component={Resultados}
        />
        <TorneosStack.Screen
          name={TorneosRoute.TorneoDetalleScreen}
          component={TorneoDetalle}
        />
        <TorneosStack.Screen
          name={TorneosRoute.TorneoEnCursoScreen}
          component={TorneoEnCurso}
        />
      </TorneosStack.Navigator>
    </>
  );
};

export default TorneosMap;
