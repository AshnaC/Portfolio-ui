import { fromJS } from "immutable";

import makeSelectGetResources, { selectGetResourcesDomain } from "../selectors";

describe("selectGetResourcesDomain", () => {
  it("should select getResources state", () => {
    const resources = { resources: [] };
    const mockState = fromJS({ getResources: resources });
    expect(selectGetResourcesDomain(mockState)).toEqual(fromJS(resources));
  });
});

describe("makeSelectGetResources", () => {
  it("should return getresource substate toJS", () => {
    const resources = { resources: [] };
    const mockState = fromJS({ getResources: resources });
    const makeGetResources = makeSelectGetResources();
    expect(makeGetResources(mockState)).toEqual(resources);
  });
});
