import { put, takeLatest } from "redux-saga/effects";
import { optionsLoaded, searchFalconFinished, setError } from "../actions";
import rootSaga, { searchFalcon, getOptions } from "../saga";

describe("search falcon saga", () => {
  let searchFalconeGenerator;
  beforeEach(() => {
    searchFalconeGenerator = searchFalcon({ payload: {} });
    searchFalconeGenerator.next();
    searchFalconeGenerator.next();
  });
  it("should dispatch searchFalconFinished action when data is fetched", () => {
    const response = { planet: "Draup" };
    const putDescriptor = searchFalconeGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(searchFalconFinished(response)));
  });
  it("should dispatch setError action when data fetch fails", () => {
    const response = new Error("Error");
    const putDescriptor = searchFalconeGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(setError()));
  });
});

describe("load options saga", () => {
  let loadOptionsGenerator;
  beforeEach(() => {
    loadOptionsGenerator = getOptions({ payload: {} });
    loadOptionsGenerator.next();
  });
  it("should dispatch optionsloaded action when data is fetched", () => {
    const planets = [
      { sigil: "sigil_1.jpeg" },
      { sigil: "sigil_2.jpg" },
      { sigil: "sigil_3.jpg" }
    ];
    const vehicles = ["A", "B", "C"];
    const response = { planets, vehicles };
    const putDescriptor = loadOptionsGenerator.next([planets, vehicles]).value;
    expect(putDescriptor).toEqual(put(optionsLoaded(response)));
  });
  it("should dispatch setError action when data fetch fails", () => {
    const response = new Error("Error");
    const putDescriptor = loadOptionsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(setError()));
  });
});
