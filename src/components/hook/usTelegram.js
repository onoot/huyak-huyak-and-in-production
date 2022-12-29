const tg = window.Telegram.WebApp;

export function useTelegram() {


    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    const onCloseonClos= () => {
        tg.close()
    };

    let onClos;
    return {
        onClos,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}
