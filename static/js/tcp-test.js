/**
 * Created by yuanlifu on 2017/10/1.
 */

$(document).ready(function () {
                $('#wait-format').click(function () {
                    if ($('#wait-format').text() == 'HEX'){

                        $('#wait-format').text('ASCII');
                        $('#select-format').text('HEX');
                    } else {

                        $('#wait-format').text('HEX');
                        $('#select-format').text('ASCII');
                    }

                });

            });
