<template>
    <v-container>
        <v-app-bar app flat color="white">
            <v-btn text icon class="ml-1" @click="$router.push({name: 'inicio'})">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </v-app-bar>
        <div style="position: relative">
            <img width="100%" src="@/assets/hojas/hoja-de-personaje.svg">
            <v-form>
                <div style="position: absolute; top: 0; left: 0; background: red; width: 20%; height: 20%">
                    <p style="color: white" v-resize-text>HOLA</p>
                </div>
            </v-form>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "HojaDePersonaje",
    data: () => ({
        caracteristicas: {
            fuerza: "10",
            destreza: "10",
            constitucion: "10",
            inteligencia: "10",
            sabiduria: "10",
            carisma: "10"
        }
    })
}
</script>

<style>
.cuadro {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}
.cuadro .v-text-field {
    position: absolute;
    font-weight: bold;
    font-size: 0.9em;
}
.cuadro .v-text-field >>> input {
    padding: 0px !important;
    padding-left: 1mm !important;
    padding-right: 1mm !important;
    margin-top: 1.2mm !important;
    height: 4mm !important;
}
.cuadro .v-text-field  .v-input__slot {
    background: transparent !important;
}
</style>