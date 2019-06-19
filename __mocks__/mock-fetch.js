export default function MockFetch() {
    const mockedRequests = [];
    const __fetch = global.fetch;

    const mock = async (url) => {
        const mockedRequest = mockedRequests.find(x => x.url === url);

        if (!mockedRequest) {
            return Promise.reject();
        }

        return mockResponse(mockedRequest.response);
    }

    global.fetch = jest.fn(mock);

    return {
        unmock() {
            global.fetch = __fetch;
        },

        mockRequest(url, response) {
            mockedRequests.push({ url, response });
        }
    }
}

async function mockResponse(data) {
    return {
        async json() {
            return data;
        }
    }
}
