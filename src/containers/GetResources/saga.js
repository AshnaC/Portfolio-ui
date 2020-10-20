import { takeLatest, call, put, all } from "redux-saga/effects";
import { LOAD_OPTIONS, SEARCH_FALCON, planetSigils } from "./constants";
import { optionsLoaded, searchFalconFinished, setError } from "./actions";

export function* getOptions() {
  try {
    let [planets, vehicles] = yield all([
      call(fetchApi, "https://findfalcone.herokuapp.com/planets", {
        method: "GET"
      }),
      call(fetchApi, "https://findfalcone.herokuapp.com/vehicles", {
        method: "GET"
      })
    ]);
    planets = planets.map((planet, i) => ({
      ...planet,
      sigil: planetSigils[i]
    }));
    yield put(optionsLoaded({ planets, vehicles }));
  } catch (er) {
    yield put(setError());
  }
}

export function* searchFalcon(action) {
  try {
    const token = yield call(
      fetchApi,
      "https://findfalcone.herokuapp.com/token",
      {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          accept: "application/json"
        }
      }
    );
    const payload = { ...action.payload, ...token };
    const status = yield call(
      fetchApi,
      "https://findfalcone.herokuapp.com/find",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          accept: "application/json",
          "content-type": "application/json"
        }
      }
    );
    yield put(searchFalconFinished(status));
  } catch (err) {
    yield put(setError());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(LOAD_OPTIONS, getOptions),
    takeLatest(SEARCH_FALCON, searchFalcon)
  ]);
}

async function fetchApi(url, options) {
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}
