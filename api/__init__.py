# encoding: utf-8

from flask import Blueprint
api = Blueprint('api', __name__,)

import controller
import models
import views
import asset_views