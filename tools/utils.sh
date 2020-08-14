COLOR_RED="\033[0;31m"
COLOR_YELLOW="\033[0;33m"
COLOR_GREEN="\033[0;32m"
COLOR_OCHRE="\033[38;5;95m"
COLOR_BLUE="\033[0;34m"
COLOR_WHITE="\033[0;37m"
COLOR_RESET="\033[0m"

function log_error {
    echo -e "${COLOR_RED}$@${COLOR_RESET}"
}

function log_info {
    echo -e "${COLOR_OCHRE}$@${COLOR_RESET}"
}

function log_header {
    echo -e ""
    echo -e "${COLOR_GREEN}*********************************************${COLOR_RESET}"
    echo -e "${COLOR_GREEN}*** $@${COLOR_RESET}"
    echo -e "${COLOR_GREEN}*********************************************${COLOR_RESET}"
}