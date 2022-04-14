import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const HomeRoute = {
  HomeScreen:"Home",
  CrearAnuncioScreen: "CrearAnuncio",
  LikesScreen: "Likes",
  MatchesScreen: "Matches",
  MesaDetalleScreen: "MesaDetalle",
}
export const MensajesRoute = {
  MensajesScreen: "Mensajes",
  ChatScreen: "Chat",
}
export const TorneosRoute = {
  TorneosScreen: "Torneos",
  CalendarioTorneoScreen: "CalentarioTorneo",
  ComentariosScreen: "Comentarios",
  InscripcionesScreen: "Inscripciones",
  NoticiaDetalleScreen: "NoticiaDetalle",
  NoticiasScreen: "Noticias",
  RankingScreen: "Ranking",
  ResultadosScreen:"Resultados",
  ResultadoDetalleScreen: "ResultadoDetalle",
  TorneoDetalleScreen: "TorneoDetalle",
  TorneoEnCursoScreen: "TorneoEnCurso",
}
export const ClubesRoute = {
  ClubScreen: "Club",
  ClubesScreen: "Clubes"
}
export const PerfilRoute ={
  PerfilScreen: "Perfil",
  ActualizarTelefonoScreen: "ActualizarTelefono",
  CodigoActualizarScreen: "CodigoActualizar",
  ConfiguracionScreen: "Configuracion",
  NotificationesScreen: "Notificaciones",
}
export const AuthRoute = {
  NumeroCelularIsScreen: 'NumeroCelularIS',
  CodigoIsScreen: 'CodigoIS',
  RegistroScreen: 'Registro',
  CelularRegistroScreen: 'NumeroCelularRegistro',
  CodigoRegistroScreen: 'CodigoRegistro',
  Pregunta1Screen: 'Pregunta1',
  Pregunta2Screen: 'Pregunta2',
  Pregunta3Screen: 'Pregunta3',
  Pregunta4Screen: 'Pregunta4',
  Pregunta5Screen: 'Pregunta5',
  NivelEstablecidoScreen: 'NivelEstablecido',
  ResolverAuthScreen: 'ResolverAuth',
  OnBoardingScreen: 'OnBoarding',
  UsuarioBloqueadoScreen: 'UsuarioBloqueado',
  InicioSesionScreen: 'InicioSesion',
  ElegirDeporteScreen: 'ElegirDeporte',
}
export const TabRoute = {
  MensajesTab: "MensajesTab",
  TorneosTab: "TorneosTab",
  HomeTab: "HomeTab",
  ClubesTab: "ClubesTab",
  PerfilTab: "PerfilTab",
}

export const AuthStack = createNativeStackNavigator();
export const MainStack = createNativeStackNavigator();
export const TabStack = createBottomTabNavigator();
export const HomeStack = createNativeStackNavigator();
export const MensajesStack = createNativeStackNavigator();
export const TorneosStack = createNativeStackNavigator();
export const ClubesStack = createNativeStackNavigator();
export const PerfilStack = createNativeStackNavigator();
