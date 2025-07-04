import { useSnackbar } from "notistack";

export const useNotification = () => {
    const { enqueueSnackbar } = useSnackbar();

    const AUTO_HIDE_DURATION = 3000;

    const showSuccess = (message: string) => {
        enqueueSnackbar(message, {
            variant: "success",
            autoHideDuration: AUTO_HIDE_DURATION,
            style: { whiteSpace: "pre-line" },
        });
    }

    const showError = (message: string) => {
        enqueueSnackbar(message, {
            variant: "error",
            autoHideDuration: AUTO_HIDE_DURATION,
            style: { whiteSpace: "pre-line" },
        });
    }

    return { showSuccess, showError };
}