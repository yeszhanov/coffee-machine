type Action =
  | { type: 'SET_IS_CONNECTED_TO_SERVER'; status: boolean }
  | { type: 'ENABLE_LOADER' }
  | { type: 'DISABLE_LOADER' }
  | { type: 'SET_TERMINAL_ID'; terminalId: string }
  | { type: 'SET_IS_CONNECTED_TO_SOCKET'; isConnectedToSocket: boolean }
  | { type: 'SET_COMMAND_RESULT'; commandResult: any }
  | { type: 'SET_SEND_REQUEST_FUNC'; sendRequest: any }
  | { type: 'SET_SEND_COMMAND_FUNC'; sendCommand: any }
  | { type: 'SET_TERMINAL_STATUS'; terminalStatus: boolean }
  | { type: 'SET_CORE_REQUESTS_FINISHED'; isCoreRequestFinished: boolean }
  | { type: 'SET_TERMINAL_INFO'; terminalInfo: object }
  | { type: 'SET_TERMINAL_WINDOW'; isTerminalWindowExpanded: boolean }
  | { type: 'SET_PRINT_RECEIPT'; printReceipt: boolean }
  | { type: 'SET_PAYLOAD_RECEIPT'; payloadReceiptBase64: string }
  | { type: 'SET_RECEIPT_PRINT'; showReceipt: boolean }
  | {
      type: 'SET_TERMINAL_ERROR';
      isTerminalError: boolean;
      errorMessage: string;
    }
  | { type: 'SET_EVENT_FIRED'; isEventFired: boolean }
  | { type: 'SET_PLAY_SOUND'; isSoundPlaying: string; soundUrl: string }
  | {type:'SET_SOUND_DISABLE'; isSoundDisabled:boolean }

type State = { isConnectedToServer: boolean };

const headerReducer = (state: State, action: Action): any => {
  switch (action.type) {
    case 'ENABLE_LOADER': {
      return { ...state, showLoader: true };
    }
    case 'DISABLE_LOADER': {
      return { ...state, showLoader: false };
    }
    case 'SET_IS_CONNECTED_TO_SERVER': {
      return { ...state, isConnectedToServer: action.status };
    }
    case 'SET_TERMINAL_ID': {
      return { ...state, terminalID: action.terminalId };
    }
    case 'SET_IS_CONNECTED_TO_SOCKET': {
      return { ...state, isConnectedToSocket: action.isConnectedToSocket };
    }
    case 'SET_COMMAND_RESULT': {
      return { ...state, commandResult: action.commandResult };
    }
    case 'SET_SEND_REQUEST_FUNC': {
      return { ...state, sendRequest: action.sendRequest };
    }
    case 'SET_SEND_COMMAND_FUNC': {
      return { ...state, sendCommand: action.sendCommand };
    }
    case 'SET_TERMINAL_STATUS': {
      return { ...state, terminalStatus: action.terminalStatus };
    }
    case 'SET_CORE_REQUESTS_FINISHED': {
      return { ...state, isCoreRequestFinished: action.isCoreRequestFinished };
    }
    case 'SET_TERMINAL_INFO': {
      return { ...state, terminalInfo: action.terminalInfo };
    }
    case 'SET_TERMINAL_WINDOW': {
      return {
        ...state,
        isTerminalWindowExpanded: action.isTerminalWindowExpanded,
      };
    }
    case 'SET_PRINT_RECEIPT': {
      return {
        ...state,
        printReceipt: action.printReceipt,
      };
    }
    case 'SET_PAYLOAD_RECEIPT': {
      return {
        ...state,
        payloadReceiptBase64: action.payloadReceiptBase64,
      };
    }
    case 'SET_RECEIPT_PRINT': {
      return {
        ...state,
        showReceipt: action.showReceipt,
      };
    }
    case 'SET_TERMINAL_ERROR': {
      return {
        ...state,
        isTerminalError: action.isTerminalError,
        errorMessage: action.errorMessage,
      };
    }
    case 'SET_EVENT_FIRED': {
      return {
        ...state,
        isEventFired: action.isEventFired,
      };
    }
    case 'SET_PLAY_SOUND':{
      return {
        ...state,
         isSoundPlaying: action.isSoundPlaying, soundUrl: action.soundUrl
      }
    }
    case 'SET_SOUND_DISABLE':{
      return {
        ...state,
        isSoundDisabled: action.isSoundDisabled,
      };
    }
    default:
      return state;
  }
};

export default headerReducer;
