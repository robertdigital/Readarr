﻿"use strict";
define(['app'], function (app) {
    NzbDrone.Release.Model = Backbone.Model.extend({
     /*   mutators: {
            seasonNumber: function () {
                return this.get('episode').seasonNumber;
            },

            paddedEpisodeNumber: function () {
                return this.get('episode').episodeNumber.pad(2);
            }
        }*/
    });
});
